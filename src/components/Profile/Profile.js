import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Profile.css';

function Profile({
  onSignOut,
  onEdit,
  setIsError,
  textError,
  isLoading,
  isError,
  isUpdated,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const form = useFormWithValidation();

  useEffect(() => {
    if (currentUser) {
      form.resetForm({ name: currentUser.name, email: currentUser.email });
    }
  }, [currentUser]);

  useEffect(() => {
    if (
      currentUser.name === form.values.name &&
      currentUser.email === form.values.email
    ) {
      form.setIsValid(false);
    }
  }, [currentUser, setIsError, form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(form.values.name, form.values.email);
    setIsEditMode(false);
  };

  const changeEditMode = () => {
    setIsEditMode(!isEditMode);
    setIsError(false);
  };

  return (
    <main className='profile'>
      <h2 className='profile__greeting'>{`Привет, ${currentUser.name}!`}</h2>
      <form
        className='profile__form'
        onSubmit={handleSubmit}
        action=''
        noValidate
      >
        <div className='profile__input-box'>
          <label className='profile__label' htmlFor='name'>
            Имя
          </label>
          <input
            className='profile__input'
            type='text'
            name='name'
            id='name'
            minLength='2'
            maxLength='30'
            required
            onChange={(e) => {
              form.handleChange(e);
              setIsError(false);
            }}
            value={form.values.name || ''}
            disabled={!isEditMode || isLoading}
          />
        </div>
        <span
          className={`profile__text-error ${
            form.errors.name && 'profile__text-error_active'
          }`}
        >
          {form.errors.name || 'неверные данные'}
        </span>
        <div className='profile__input-box'>
          <label className='profile__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='profile__input'
            type='email'
            name='email'
            id='email'
            required
            value={form.values.email || ''}
            onChange={(e) => {
              form.handleChange(e);
              setIsError(false);
            }}
            disabled={!isEditMode || isLoading}
          />
        </div>
        <span
          className={`profile__text-error ${
            form.errors.email && 'profile__text-error_active'
          }`}
        >
          {form.errors.email || 'неверные данные'}
        </span>
        {!isEditMode && (
          <div className='profile__btns-box'>
            {isUpdated && (
              <p className='profile__update-message'>Данные изменены</p>
            )}
            <button
              onClick={changeEditMode}
              type='button'
              className='profile__edit'
              aria-label='Редактировать'
            >
              Редактировать
            </button>
            <button
              type='button'
              className='profile__exit'
              aria-label='Выйти из аккаунта'
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
        {isEditMode && (
          <div className='profile__edit-box'>
            {isError && <p className='profile__error-message'>{textError}</p>}
            <button
              type='submit'
              className='profile__save-btn'
              aria-label='Сохранить'
              disabled={!form.isValid || isError || isLoading}
            >
              {isLoading ? 'Сохранение...' : 'Сохранить'}
            </button>
          </div>
        )}
      </form>
    </main>
  );
}

export default Profile;
