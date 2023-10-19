import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import redlike from '../../images/red.svg';
import whitelike from '../../images/white.svg';
import cross from '../../images/delete.svg';
import { FILMS_URL } from '../../utils/constants';

export default function MoviesCard({ onDelete, onLike, movie, savedMovies }) {
  const [isLiked, setIsLiked] = useState(false);

  const location = useLocation();
  const moviesPage = location.pathname === '/movies';
  const savedPage = location.pathname === '/saved-movies';

  function getDuration(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  useEffect(() => {
    if (moviesPage) {
      setIsLiked(savedMovies.some((m) => m.movieId === movie.id));
    }
  }, [savedMovies, movie.id, setIsLiked, moviesPage]);

  function handleLikeMovie() {
    setIsLiked(!isLiked);
    onLike(movie);
  }

  function handleDeleteMovie() {
    onDelete(movie._id);
  }

  return (
    <div className='movie'>
      <a
        className='movie__link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movie__picture'
          src={moviesPage ? `${FILMS_URL}${movie.image.url}` : movie.image}
          alt={movie.nameRU}
        />
      </a>
      <div className='movie__info'>
        <h2 className='movie__name'>{movie.nameRU}</h2>
        {moviesPage && (
          <button
            onClick={handleLikeMovie}
            type='button'
            aria-label='Сохранить в избранные'
            className='movie__like-btn'
          >
            {' '}
            <img
              src={isLiked ? redlike : whitelike}
              alt='Сохранить в избранные'
              className='movie__heart-pic'
            />{' '}
          </button>
        )}
        {savedPage && (
          <button
            type='button'
            aria-label='Удалить из избранного'
            className='movie__delete-btn'
            onClick={handleDeleteMovie}
          >
            {' '}
            <img src={cross} alt='Удалить из избранного' />{' '}
          </button>
        )}
      </div>
      <p className='movie__duration'>{getDuration(movie.duration)}</p>
    </div>
  );
}
