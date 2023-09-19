import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
}
