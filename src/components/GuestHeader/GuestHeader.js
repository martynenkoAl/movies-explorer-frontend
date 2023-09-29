import React from 'react';
import { Link } from 'react-router-dom';
import './GuestHeader.css';
import logo from '../../images/header-logo.svg';

export default function GuestHeader() {
  return (
    <div className='guest-header'>
      <Link className='user-header__logo' to='/' replace>
        <img src={logo} alt='Логотип проекта' />
      </Link>
      <nav className='guest-header__nav'>
        <Link className='guest-header__reg' to='/signup' replace>
          Регистрация
        </Link>
        <Link className='guest-header__btn' to='/signin' replace>
          <p className='guest-header__btn-text'>Войти</p>
        </Link>
      </nav>
    </div>
  );
}
