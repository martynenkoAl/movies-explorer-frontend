import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/header-logo.svg';

export default function Register() {
  return (
    <div className='register'>
      <Link className='register__logo' to='/' replace>
        <img src={logo} alt='На главную страницу' />
      </Link>
      <h2 className='register__greeting'>Добро пожаловать!</h2>
      <form className='register__form'>
        <div className='register__input-box'>
          <label className='register__label' htmlFor='name'>
            Имя
          </label>
          <input
            className='register__input'
            type='text'
            id='name'
            minLength='2'
            maxLength='30'
            required
            placeholder='Виталий'
            autoComplete='off'
          />
          <span className='register__text-error_name register__text-error'>
            Что-то пошло не так...
          </span>
        </div>
        <div className='register__input-box'>
          <label className='register__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='register__input'
            type='email'
            id='email'
            required
            placeholder='pochta@yandex.ru'
            autoComplete='off'
          />
          <span className='register__text-error_email register__text-error'>
            Что-то пошло не так...
          </span>
        </div>
        <div className='register__input-box'>
          <label className='register__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className='register__input'
            type='password'
            id='password'
            minLength='6'
            required
            autoComplete='off'
          />
          <span className='register__text-error_password register__text-error register__text-error_active'>
            Что-то пошло не так...
          </span>
        </div>
        <button
          type='submit'
          className='register__btn'
          aria-label='Зарегистрироваться'
        >
          Зарегистрироваться
        </button>
      </form>
      <span className='register__link-text'>
        Уже зарегистрированы?{' '}
        <Link className='register__link' to='/signin'>
          Войти
        </Link>
      </span>
    </div>
  );
}
