import React from 'react';
import { useGlobalContext } from '../context';

function Sidebar() {
  const { sidebarActive, setSidebarActive, setCategory } = useGlobalContext();
  return (
    <>
      <aside className={sidebarActive ? 'sidebar-active' : 'sidebar'}>
        <div className='bars-sidebar' onClick={() => setSidebarActive(false)}>
          <i className='fa-solid fa-bars'></i>
        </div>
        <h3 className='logo'>News App</h3>
        <ul className='nav'>
          <li className='nav-item' onClick={() => setCategory('entertainment')}>
            Entertainment
          </li>
          <li className='nav-item' onClick={() => setCategory('business')}>
            Business
          </li>
          <li className='nav-item' onClick={() => setCategory('general')}>
            General
          </li>
          <li className='nav-item' onClick={() => setCategory('health')}>
            Health
          </li>
          <li className='nav-item' onClick={() => setCategory('science')}>
            Science
          </li>
          <li className='nav-item' onClick={() => setCategory('sports')}>
            Sports
          </li>
          <li className='nav-item' onClick={() => setCategory('technology')}>
            Technology
          </li>
        </ul>
      </aside>
      {sidebarActive && (
        <div className='overlay' onClick={() => setSidebarActive(false)}></div>
      )}
    </>
  );
}

export default Sidebar;
