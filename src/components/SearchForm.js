import React from 'react';
import { useGlobalContext } from '../context';

function SearchForm() {
  const { search, setSearch, searchHandler } = useGlobalContext();
  const Search = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='container'>
      <div className='row mx-auto'>
        <div className='bars'>
          <i className='fa-solid fa-bars'></i>
        </div>
        <form className='form-section' onSubmit={searchHandler}>
          <button className='clear-search-btn'>
            <i className='fa-solid fa-x'></i>
          </button>
          <input
            type='text'
            className='search-field'
            value={search}
            onChange={Search}
          />
          <button type='submit' className='search-btn'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
