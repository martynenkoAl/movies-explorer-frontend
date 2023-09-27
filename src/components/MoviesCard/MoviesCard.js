import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import redlike from '../../images/red-heart.svg';
import whitelike from '../../images/white-heart.svg';
import cross from '../../images/delete-cross.svg';

export default function MoviesCard({ movie: { nameRU, duration, thumbnail } }) {
  const [isLiked, setIsLiked] = React.useState(false);

  const location = useLocation();
  const allMovies = location.pathname === '/movies';
  const saved = location.pathname === '/saved-movies';

  function getDuration(mins) {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${hours}ч ${minutes}м`;
  }

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='movie'>
      <img src={thumbnail} alt={nameRU} className='movie__picture' />
      <div className='movie__info'>
        <h2 className='movie__name'>{nameRU}</h2>
        {allMovies && (
          <button
            onClick={toggleLike}
            type='button'
            aria-label='Сохранить в избранные'
            className='movie__like-btn'
          >
            {' '}
            <img
              src={isLiked ? redlike : whitelike}
              alt='Сохранить в избранные'
            />{' '}
          </button>
        )}
        {saved && (
          <button
            type='button'
            aria-label='Удалить из избранного'
            className='movie__delete-btn'
          >
            {' '}
            <img src={cross} alt='Удалить из избранного' />{' '}
          </button>
        )}
      </div>
      <p className='movie__duration'>{getDuration(duration)}</p>
    </div>
  );
}
