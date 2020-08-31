import React,  { useState }  from 'react';
import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import { slide as Menu } from 'react-burger-menu';
import {HamStyl} from './hamburger.style';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <HamStyl>
    <div className='hamburger-container'>
      
      <nav className='main' id='hambuger-nav'>
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

      <Menu right isOpen={open}>
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
