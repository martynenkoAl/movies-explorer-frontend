import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='error'>
      <h2 className='error__status'>404</h2>
      <p className='error__message'>Страница не найдена</p>
      <Link className='error__link' to='/' replace>
        Назад
      </Link>
    </div>
  );
}
