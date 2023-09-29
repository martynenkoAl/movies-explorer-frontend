import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';
import close from '../../images/close-burger.svg';
import account from '../../images/to-account.svg';

export default function BurgerMenu({ onClose, isOpen }) {
  const location = useLocation();
  const landing = location.pathname === '/';
  const movies = location.pathname === '/movies';
  const saved = location.pathname === '/saved-movies';

  return (
    <nav className={`burger ${isOpen && 'burger_opened'}`}>
      <div className='burger__container'>
        <button
          type='button'
          aria-label='Закрыть'
          onClick={onClose}
          className='burger__close-btn'
        >
          <img src={close} alt='Закрыть' />
        </button>
        <ul className='burger__nav'>
          <li className='burger__item'>
            <Link className='burger__link' to='/' replace>
              <p
                className={`burger__link-txt ${
                  landing && 'burger__link-txt_active'
                }`}
              >
                Главная
              </p>
            </Link>
          </li>
          <li className='burger__item'>
            <Link className='burger__link' to='/movies' replace>
              <p
                className={`burger__link-txt ${
                  movies && 'burger__link-txt_active'
                }`}
              >
                Фильмы
              </p>
            </Link>
          </li>
          <li className='burger__item'>
            <Link className='burger__link' to='/saved-movies' replace>
              <p
                className={`burger__link-txt ${
                  saved && 'burger__link-txt_active'
                }`}
              >
                Сохранённые фильмы
              </p>
            </Link>
          </li>
        </ul>
        <Link className='burger__account-btn' to='/profile' replace>
          <p className='burger__btn-text'>Аккаунт</p>
          <div className='burger__icon-block'>
            <img src={account} alt='Аккаунт' />
          </div>
        </Link>
      </div>
    </nav>
  );
}
