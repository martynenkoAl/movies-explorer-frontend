import React from 'react';
import './Profile.css';

export default function Profile() {
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
            id='email'
            required
            placeholder='pochta@yandex.ru'
          />
        </div>
        <button type='submit' className='profile__edit'>
          Редактировать
        </button>
      </form>
      <button type='button' className='profile__exit'>
        Выйти из аккаунта
      </button>
      {/* временное решение для верстки */}
      <span className='profile__error-msg'>
        При обновлении профиля произошла ошибка.
      </span>
      <button className='profile__save-btn profile__save-btn_inactive'>
        Сохранить
      </button>
    </div>
  );
}
