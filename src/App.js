import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';

let everythingtUrl =
  'https://newsapi.org/v2/everything?q=everything&sortBy=publishedAt&apiKey=6e52cffd5f074007a9b69ca930fc5663';
let headlinestUrl =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6e52cffd5f074007a9b69ca930fc5663';
const key = '6e52cffd5f074007a9b69ca930fc5663';

function App() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(everythingtUrl);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (search) {
      setUrl(
        `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
    }
    if (country && category) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
    }
    if (category) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
    }
    if (country) {
      setUrl(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=6e52cffd5f074007a9b69ca930fc5663`
      );
    }
  }, [search]);
  const fetchNews = async () => {
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
  };
  useEffect(() => {
    fetchNews();
  }, [search, country, category]);
  console.log(news);

  return (
    <section className='container'>
      <Sidebar />
      <section className='section-center'>
        <SearchForm />
        <NewsFeed news={news} loading={loading} />
        {/* <NewsFeed />
        <NewsFeed />
        <NewsFeed /> */}
      </section>
    </section>
  );
}

export default App;
