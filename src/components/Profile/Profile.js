import React from 'react';
import './Profile.css';

export default function Profile() {
  const [isEdit, setIsEdit] = React.useState(false);

  const changeEditMode = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className='profile'>
      <h2 className='profile__greeting'>Привет, Виталий!</h2>
      <form className='profile__form'>
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
            placeholder='Виталий'
          />
        </div>
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
            placeholder='pochta@yandex.ru'
          />
        </div>
        {!isEdit && (
          <button
            onClick={changeEditMode}
            type='submit'
            className='profile__edit'
            aria-label='Редактировать'
          >
            Редактировать
          </button>
        )}
      </form>
      {!isEdit && (
        <button
          type='button'
          className='profile__exit'
          aria-label='Выйти из аккаунта'
        >
          Выйти из аккаунта
        </button>
      )}

      {isEdit && (
        <div className='profile__edit-box'>
          <span className='profile__error-msg'>
            При обновлении профиля произошла ошибка.
          </span>
          <button
            onClick={changeEditMode}
            className='profile__save-btn'
            aria-label='Сохранить'
          >
            Сохранить
          </button>
        </div>
      )}
    </div>
  );
}
