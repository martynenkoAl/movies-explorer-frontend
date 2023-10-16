import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResize } from '../../hooks/useResize';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import { ERROR_SEARCH_MOVIE, NOT_FOUND_MOVIE } from '../../utils/constants';

export default function MoviesCardList({
  isError,
  onLike,
  savedMovies,
  movies,
  onDelete,
  isFirstSearch,
}) {
  const location = useLocation();
  const moviesPage = location.pathname === '/movies';
  const screen = useResize();
  const [moviesCount, setMoviesCount] = useState(0);
  const [moviesAdd, setMoviesAdd] = useState(0);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const display = movies.slice(0, moviesCount);

  function addCards() {
    setMoviesCount(moviesCount + moviesAdd);
  }

  useEffect(() => {
    if (screen > 1280) {
      setMoviesCount(12);
      setMoviesAdd(4);
    }
    if ((screen > 768) & (screen <= 1280)) {
      setMoviesCount(8);
      setMoviesAdd(2);
    }
    if (screen <= 768) {
      setMoviesCount(5);
      setMoviesAdd(2);
    }
  }, [screen, moviesPage]);

  useEffect(() => {
    if (movies.length === 0 && !isFirstSearch) {
      setIsNothingFound(true);
    } else {
      setIsNothingFound(false);
    }
  }, [movies, setIsNothingFound, isFirstSearch]);

  return (
    <section className='list'>
      <div className='list__gallery'>
        {moviesPage &&
          display.length !== 0 &&
          display.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                savedMovies={savedMovies}
                onLike={onLike}
                movie={movie}
              />
            );
          })}
        {!moviesPage &&
          movies.length !== 0 &&
          movies.map((savedMovie) => {
            return (
              <MoviesCard
                key={savedMovie.id}
                onDelete={onDelete}
                movie={savedMovie}
                savedMovies={savedMovies}
              />
            );
          })}
        <span className='list__error'>
          {isError ? ERROR_SEARCH_MOVIE : isNothingFound && NOT_FOUND_MOVIE}
        </span>
      </div>
      {moviesPage && movies.length > moviesCount && (
        <button
          onClick={addCards}
          className='list__more-btn'
          type='button'
          aria-label='Отобразить больше фильмов'
        >
          Ещё
        </button>
      )}
    </section>
  );
}
