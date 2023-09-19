import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { movieData } from '../../utils/movieData';
import './MoviesCardList.css';

export default function MoviesCardList() {
  return (
    <div className='list'>
      <div className='list__gallery'>
        {movieData.map((movie) => (
          <MoviesCard key={movie.movieId} movie={movie} />
        ))}
      </div>
      <button
        className='list__more-btn'
        type='button'
        aria-label='Отобразить больше фильмов'
      >
        Ещё
      </button>
    </div>
  );
}
