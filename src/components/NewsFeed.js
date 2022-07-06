import React from 'react';

function NewsFeed({ news, loading }) {
  if (loading) {
    return (
      <article className='news-feed'>
        <h1>loading...</h1>
      </article>
    );
  }
  return (
    <>
      {/* {news.map((item, index) => {
        const {
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
        } = item;
        return (
          <>
            <p key={index}>{description}</p> <br />
            <hr />
          </>
        );
      })} */}
      <article className='news-feed'>
        <div className='img-container'>
          <img
            src='https://cdn.vox-cdn.com/thumbor/DfrBCvbn2RE3gi3KUPOZbr2ER7M=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19398931/tesla.jpg'
            alt=''
          />
        </div>
        <div className='main-feed'>
          <div className='bar'></div>
          <p className='date'>
            <span>
              <i className='fa-solid fa-clock'></i>
            </span>
            {new Date('2022-06-17T14:13:17Z').toDateString()}
          </p>
          <h2>Tesla layoffs reportedly affect hourly workers, too</h2>
          <p>
            Elon Musk told Tesla employees layoffs would affect 10 percent of
            salaried workers. Reports from Electrek and Reuters note hourly
            workers have also been let go recently, and job postings from Tesla
            have dropped.
          </p>
          <a href='/' className='read-more'>
            <button>read more</button>
          </a>
        </div>
      </article>
    </>
  );
}

export default NewsFeed;
