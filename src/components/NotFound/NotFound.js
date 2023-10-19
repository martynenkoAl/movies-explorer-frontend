import React from 'react';
import './NotFound.css';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='error'>
      <h2 className='error__status'>404</h2>
      <p className='error__message'>Страница не найдена</p>
      <button
        className='error__link'
        onClick={() => navigate(-1)}
        type='button'
        aria-label='Вернуться на предыдущую страницу'
      >
        Назад
      </button>
    </div>
  );
}
