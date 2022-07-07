import React, { useContext, useState, useEffect, useCallback } from 'react';

let everythingtUrl =
  'https://newsapi.org/v2/everything?q=tech&language=en&sortBy=publishedAt&apiKey=6e52cffd5f074007a9b69ca930fc5663';
const key = '6e52cffd5f074007a9b69ca930fc5663';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(everythingtUrl);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (search) {
      setUrl(
        `https://newsapi.org/v2/everything?q=${search}&language=en&sortBy=publishedAt&apiKey=${key}`
      );
    }
    if (country && category) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&language&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
    }
    if (category) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?category=${category}&language&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
    }
    if (country) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=${country}&language&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
    }
  }, [search, category, country]);
  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { articles } = data;
      if (articles) {
        const newNews = articles.map((item) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = item;
          return {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          };
        });
        setNews(newNews);
      } else {
        setNews([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchNews();
  }, [search, country, category, fetchNews]);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  return (
    <AppContext.Provider
      value={{ setSearch, search, news, searchHandler, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
