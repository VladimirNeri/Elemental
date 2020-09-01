import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import { slide as Menu } from 'react-burger-menu';
import { HamStyl } from './hamburger.style';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <HamStyl>
      <div className='hamburger-container'>
        <nav className='main' id='hamburger-nav'>
          <ul>
            {open ? (
              <li className='menu close-menu'>
                <div onClick={() => setOpen(!open)} className='menu-hover'>
                  &#10005;
                </div>
              </li>
            ) : (
              <li className='menu open-menu'>
                <div onClick={() => setOpen(!open)} className='menu-hover'>
                  &#9776;
                </div>
              </li>
            )}
          </ul>
        </nav>

       
      </div>
    </HamStyl>
  );
};

export default Hamburger;
