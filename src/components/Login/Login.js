import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/header-logo.svg';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { PATTERN_EMAIL } from '../../utils/constants';

export default function Login({
  onSignIn,
  isLoading,
  isError,
  setIsError,
  textError,
}) {
  const form = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(form.values.email, form.values.password);
  };

  useEffect(() => {
    setIsError(false);
  }, [setIsError]);

  return (
    <div className='login'>
      <Link className='login__logo' to='/' replace>
        <img src={logo} alt='На главную страницу' />
      </Link>
      <h2 className='login__greeting'>Рады видеть!</h2>
      <form
        className='login__form'
        onSubmit={handleSubmit}
        action=''
        noValidate
      >
        <div className='login__input-box'>
          <label className='login__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='login__input'
            type='email'
            id='email'
            name='email'
            required
            placeholder='e-mail'
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
            className={`login__text-error ${
              form.errors.email && 'login__text-error_active'
            }`}
          >
            {form.errors.email || 'неверные данные'}
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
            className={`login__text-error ${
              form.errors.password && 'login__text-error_active'
            }`}
          >
            {form.errors.password || 'неверные данные'}
          </span>
        </div>
        <div className='login__btn-box'>
          {isError && <p className='login__error-message'>{textError}</p>}
          <button
            type='submit'
            className='login__btn'
            aria-label='Войти в профиль'
            disabled={!form.isValid || isError || isLoading}
          >
            {isLoading ? 'Вход...' : 'Войти'}
          </button>
        </div>
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
