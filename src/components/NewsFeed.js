import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useGlobalContext } from '../context';
import Loading from './Loading';

function NewsFeed() {
  const { news, loading } = useGlobalContext();

  // display news func
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayNews = news
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((newss, index) => {
      const { title, description, url, urlToImage, publishedAt } = newss;
      return (
        <div key={index} className='row my-3 news-feed'>
          <div className='col-md-6'>
            <img src={urlToImage} alt={title} className='img-fluid' />
          </div>
          <div className='col-md-6 my-auto main-feed'>
            <div className='bar'></div>
            <p className='date text-secondary'>
              <span>
                <i className='fa-solid fa-clock'></i>
              </span>
              <strong>{new Date(publishedAt).toDateString()}</strong>
            </p>
            <h2>{title}</h2>
            <p>{description}</p>
            <a
              href={url}
              target='_blank'
              rel='noreferrer'
              className='read-more'
            >
              <button>read more</button>
            </a>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(news.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // display news func

  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    componentDidMount();
  }, [pageNumber]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className='container'>
        {displayNews}
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination-btns'}
          previousLinkClassName={'prev-btn'}
          nextLinkClassName={'next-btn'}
          disabledClassName={'pagination-Disabled'}
          activeClassName={'pagination-Active'}
        />
        {/* {news.map((item, index) => {
          const { title, description, url, urlToImage, publishedAt } = item;
          return (
            <div key={index} className='row my-3 news-feed'>
              <div className='col-md-6'>
                <img src={urlToImage} alt={title} className='img-fluid' />
              </div>
              <div className='col-md-6 my-auto main-feed'>
                <div className='bar'></div>
                <p className='date text-secondary'>
                  <span>
                    <i className='fa-solid fa-clock'></i>
                  </span>
                  <strong>{new Date(publishedAt).toDateString()}</strong>
                </p>
                <h2>{title}</h2>
                <p>{description}</p>
                <a
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                  className='read-more'
                >
                  <button>read more</button>
                </a>
              </div>
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default NewsFeed;
