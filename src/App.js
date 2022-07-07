import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';

function App() {
  return (
    <section>
      <Sidebar />
      <section className='section-center'>
        <SearchForm />
        <NewsFeed />
      </section>
    </section>
  );
}

export default App;
