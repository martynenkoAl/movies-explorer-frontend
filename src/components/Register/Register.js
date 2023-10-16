import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Register.css';
import logo from '../../images/header-logo.svg';
import { PATTERN_EMAIL } from '../../utils/constants';

export default function Register({
  onSignUp,
  isLoading,
  isError,
  setIsError,
  textError,
}) {
  const form = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(form.values.name, form.values.email, form.values.password);
  };

  useEffect(() => {
    setIsError(false);
  }, [setIsError]);

  return (
    <main className='register'>
      <Link className='register__logo' to='/' replace>
        <img src={logo} alt='На главную страницу' />
      </Link>
      <h2 className='register__greeting'>Добро пожаловать!</h2>
      <form
        className='register__form'
        onSubmit={handleSubmit}
        action=''
        noValidate
      >
        <div className='register__input-box'>
          <label className='register__label' htmlFor='name'>
            Имя
          </label>
          <input
            className='register__input'
            type='text'
            id='name'
            name='name'
            minLength={2}
            maxLength={30}
            required
            placeholder='Имя'
            autoComplete='off'
            onChange={(e) => {
              form.handleChange(e);
              setIsError(false);
            }}
            value={form.values.name || ''}
            disabled={isLoading}
          />
          <span
            className={`register__text-error ${
              form.errors.name && 'register__text-error_active'
            }`}
          >
            {form.errors.name || 'неверные данные'}
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
            name='email'
            required
            placeholder='E-mail'
            autoComplete='off'
            minLength={2}
            maxLength={30}
            pattern={PATTERN_EMAIL}
            value={form.values.email || ''}
            onChange={(e) => {
              form.handleChange(e);
              setIsError(false);
            }}
            disabled={isLoading}
          />
          <span
            className={`register__text-error ${
              form.errors.email && 'register__text-error_active'
            }`}
          >
            {form.errors.email || 'неверные данные'}
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
            name='password'
            minLength={6}
            maxLength={20}
            required
            autoComplete='off'
            value={form.values.password || ''}
            onChange={(e) => {
              form.handleChange(e);
              setIsError(false);
            }}
            disabled={isLoading}
          />
          <span
            className={`register__text-error ${
              form.errors.password && 'register__text-error_active'
            }`}
          >
            {form.errors.password || 'неверные данные'}
          </span>
        </div>
        <div className='register__btn-box'>
          {isError && <p className='register__error-message'>{textError}</p>}
          <button
            type='submit'
            className='register__btn'
            aria-label='Зарегистрироваться'
            disabled={!form.isValid || isError}
            onClick={handleSubmit}
          >
            {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </div>
      </form>
      <span className='register__link-text'>
        Уже зарегистрированы?{' '}
        <Link className='register__link' to='/signin'>
          Войти
        </Link>
      </span>
    </main>
  );
}
