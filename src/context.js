import React, { useContext, useState, useEffect, useCallback } from 'react';
import ReactPaginate from 'react-paginate';

let everythingtUrl =
  'https://newsapi.org/v2/everything?q=everything&language=en&sortBy=publishedAt&apiKey=6e52cffd5f074007a9b69ca930fc5663';
const key = '6e52cffd5f074007a9b69ca930fc5663';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(everythingtUrl);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    if (search) {
      setUrl(
        `https://newsapi.org/v2/everything?q=${search}&language=en&sortBy=publishedAt&apiKey=${key}`
      );
    } else {
      setUrl(everythingtUrl);
    }
    if (category) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
      setSidebarActive(false);
    }
  }, [search, category]);
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
    console.log(url);
  }, [search, category, fetchNews]);

  return (
    <AppContext.Provider
      value={{
        setSearch,
        search,
        news,
        loading,
        sidebarActive,
        setSidebarActive,
        setCategory,
        category,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
