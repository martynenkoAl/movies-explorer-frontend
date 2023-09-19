import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/header-logo.svg';

export default function Login() {
  return (
    <div className='login'>
      <Link className='login__logo' to='/' replace>
        <img src={logo} alt='На главную страницу' />
      </Link>
      <h2 className='login__greeting'>Рады видеть!</h2>
      <form className='login__form'>
        <div className='login__input-box'>
          <label className='login__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='login__input'
            type='email'
            id='email'
            required
            placeholder='pochta@yandex.ru'
            autoComplete='off'
          />
          <span className='login__text-error_email login__text-error'>
            Что-то пошло не так...
          </span>
        </div>
        <div className='login__input-box'>
          <label className='login__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className='login__input'
            type='password'
            id='password'
            minLength='6'
            required
            autoComplete='off'
          />
          <span className='login__text-error_password login__text-error login__text-error_active'>
            Что-то пошло не так...
          </span>
        </div>
        <button type='submit' className='login__btn'>
          Войти
        </button>
      </form>
      <span className='login__link-text'>
        Ещё не зарегистрированы?{' '}
        <Link className='login__link' to='/signup'>
          Регистрация
        </Link>
      </span>
    </div>
  );
}
