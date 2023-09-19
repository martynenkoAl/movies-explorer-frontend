import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import close from '../../images/close-burger.svg';
import account from '../../images/to-account.svg';

export default function BurgerMenu({ onClose, isOpen }) {
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
              <p className='burger__link-txt'>Главная</p>
            </Link>
          </li>
          <li className='burger__item'>
            <Link className='burger__link' to='/movies' replace>
              <p className='burger__link-txt burger__link-txt_active'>Фильмы</p>
            </Link>
          </li>
          <li className='burger__item'>
            <Link className='burger__link' to='/saved-movies' replace>
              <p className='burger__link-txt'>Сохранённые фильмы</p>
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
