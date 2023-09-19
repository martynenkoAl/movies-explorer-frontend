import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form' noValidate>
        <div className='search__container'>
          <input
            type='text'
            name='search'
            placeholder='Фильм'
            className='search__input'
          />
          <button className='search__button'>
            <p className='search__btn-txt'>Найти</p>
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </div>
  );
}
