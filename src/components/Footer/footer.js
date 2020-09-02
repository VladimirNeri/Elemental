import React from 'react'
import data from '../../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="icons">
    <ul>
      {data.map((s) => (
        <li key={s.label}>
          <a href={s.link}>
            <FontAwesomeIcon icon={s.icon} />
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Footer

