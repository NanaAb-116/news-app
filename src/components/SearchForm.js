import React from 'react';

function SearchForm() {
  return (
    <div className='form-section'>
      <form>
        <button className='clear-search-btn'>
          <i className='fa-solid fa-x'></i>
        </button>
        <input type='text' className='search-field' />
        <button type='submit' className='search-btn'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
