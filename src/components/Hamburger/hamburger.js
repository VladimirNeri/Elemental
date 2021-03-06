import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import Menu from 'react-burger-menu/lib/menus/slide';
import { HamStyl } from './hamburger.style';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <HamStyl>
      <div className='hamburger-container'>
        <nav className='hamburger'>
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

        <Menu right noOverlay width={240} isOpen={open}>
          <ul className='hamburger-ul'>
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index && 'index-li'}>{l.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      </div>
    </HamStyl>
  );
};

export default Hamburger;
