import React from 'react';

function Sidebar() {
  return (
    <>
      <div className='bars'>
        <i className='fa-solid fa-bars'></i>
      </div>
      <aside>
        <h3 className='logo'>News App</h3>
        <ul className='nav'>
          <li className='nav-item'>Entertainment</li>
          <li className='nav-item'>Business</li>
          <li className='nav-item'>Sports</li>
          <li className='nav-item'>Politics</li>
          <li className='nav-item'>Tech</li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
