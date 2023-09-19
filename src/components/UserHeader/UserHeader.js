import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './UserHeader.css';
import logo from '../../images/header-logo.svg';
import account from '../../images/to-account.svg';
import burgerDark from '../../images/burger-dark.svg';
import burgerLight from '../../images/burger-light.svg';

export default function UserHeader({ clickBurger }) {
  const location = useLocation();
  const dark = location.pathname === '/';
  const movies = location.pathname === '/movies';
  const saved = location.pathname === '/saved-movies';

  return (
    <header className={`user-header ${dark && 'user-header_dark'}`}>
      <Link className='user-header__logo' to='/' replace>
        <img src={logo} alt='Логотип проекта' />
      </Link>
      <nav className='user-header__nav'>
        <Link
          className={`user-header__movies ${
            dark && 'user-header__movies_dark'
          } ${movies && 'user-header__movies_all'}`}
          to='/movies'
          replace
        >
          Фильмы
        </Link>
        <Link
          className={`user-header__movies ${
            dark && 'user-header__movies_dark'
          } ${saved && 'user-header__movies_saved'}`}
          to='/saved-movies'
          replace
        >
          Сохранённые фильмы
        </Link>
      </nav>
      <Link
        className={`user-header__account-btn ${
          dark && 'user-header__account-btn_dark'
        }`}
        to='/profile'
        replace
      >
        <p className='user-header__btn-text'>Аккаунт</p>
        <div className='user-header__icon-block'>
          <img src={account} alt='Аккаунт' />
        </div>
      </Link>
      <button onClick={clickBurger} className='user-header__burger-btn'>
        <img
          className='user-header__burger-pic'
          src={dark ? burgerDark : burgerLight}
          alt='Меню'
        />
      </button>
    </header>
  );
}
