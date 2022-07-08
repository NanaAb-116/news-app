import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

function SearchForm() {
  const { search, setSearch, setSidebarActive } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  let searchTimeout;

  const sea = () => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      console.log(searchValue.current.value);
      setSearch(searchValue.current.value);
    }, 1000);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(searchValue.current.value);
  };
  return (
    <div className='container'>
      <div className='row mx-auto'>
        <div className='bars' onClick={() => setSidebarActive(true)}>
          <i className='fa-solid fa-bars'></i>
        </div>
        <form className='form-section' onSubmit={searchHandler}>
          {search && (
            <button
              className='clear-search-btn'
              onClick={() => (searchValue.current.value = '')}
            >
              <i className='fa-solid fa-x'></i>
            </button>
          )}
          <input
            type='text'
            className='search-field'
            ref={searchValue}
            onChange={sea}
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
