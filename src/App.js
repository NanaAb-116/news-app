import React from 'react';
import './App.css';
import { useGlobalContext } from './context';
import SearchForm from './components/SearchForm';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';

function App() {
  const { sidebarActive } = useGlobalContext();
  if (sidebarActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
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
