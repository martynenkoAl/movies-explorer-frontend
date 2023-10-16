import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

export default function SearchForm({
  onSearch,
  isShort,
  searchText,
  onSwitch,
}) {
  const form = useFormWithValidation();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    form.resetForm({ search: searchText });
    setIsError(false);
  }, [searchText, setIsError]);

  function onSubmit(e) {
    e.preventDefault();
    if (form.values.search) {
      onSearch(form.values.search);
    } else {
      setIsError(true);
    }
  }

  return (
    <section className='search'>
      <form className='search__form' noValidate onSubmit={onSubmit} action=''>
        <div className='search__container'>
          <input
            type='text'
            name='search'
            placeholder='Фильм'
            className='search__input'
            required
            value={form.values.search || ''}
            onChange={(e) => {
              form.handleChange(e);
              setIsError(false);
            }}
          />
          <button
            type='submit'
            className='search__button'
            aria-label='Найти'
            disabled={isError}
          >
            <p className='search__btn-txt'>Найти</p>
          </button>
        </div>
        <span
          className={`search__text-error ${
            isError && 'search__text-error_active'
          }`}
        >
          Введите ключевое слово
        </span>
      </form>
      <FilterCheckbox isShort={isShort} onSwitch={onSwitch} />
    </section>
  );
}
