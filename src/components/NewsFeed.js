import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';

function NewsFeed() {
  const { news, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className='container'>
        {news.map((item, index) => {
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
        })}
      </div>
    </>
  );
}

export default NewsFeed;
