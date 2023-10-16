import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { getMovies } from '../../utils/MoviesApi';
import { useCallback } from 'react';

function Movies({ onDelete, savedMovies, onLike }) {
  const [searchText, setSearchText] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFirstSearch, setFirstSearch] = useState(true);

  function filterShortMovies(movies) {
    return movies.filter((item) => item.duration < 40);
  }

  const handleFilterMovies = useCallback((movies, search, isShort) => {
    const searchedMovies = movies.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(search.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredMovies(
      isShort ? filterShortMovies(searchedMovies) : searchedMovies
    );
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('search', JSON.stringify(search));
    localStorage.setItem('short', JSON.stringify(isShort));
  }, []);

  function handleSearchMovie(search) {
    setIsLoading(true);
    setSearchText(search);

    if (allMovies.length === 0) {
      getMovies()
        .then((data) => {
          setAllMovies(data);
          setIsShort(false);
          setIsError(false);
          setFirstSearch(false);
          handleFilterMovies(data, search, isShort);
        })
        .catch((error) => {
          setIsError(true);
          console.error(`ошибка при поиске фильмов ${error}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      handleFilterMovies(allMovies, search, isShort);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (localStorage.movies) {
      const allmovies = JSON.parse(localStorage.movies);
      const searched = JSON.parse(localStorage.search);
      const shorts = JSON.parse(localStorage.short);
      setIsError(false);
      setFirstSearch(false);
      setAllMovies(allmovies);
      setSearchText(searched);
      setIsShort(shorts);
      handleFilterMovies(allmovies, searched, shorts);
    }
  }, [handleFilterMovies]);

  function handleSwitchShort() {
    if (isShort) {
      setIsShort(false);
      handleFilterMovies(allMovies, searchText, false);
    } else {
      setIsShort(true);
      handleFilterMovies(allMovies, searchText, true);
    }
  }

  return (
    <main className='movies'>
      <SearchForm
        onSearch={handleSearchMovie}
        isShort={isShort}
        searchText={searchText}
        onSwitch={handleSwitchShort}
        savedMovies={savedMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={filteredMovies}
          onLike={onLike}
          savedMovies={savedMovies}
          isError={isError}
          onDelete={onDelete}
          isLoading={isLoading}
          isFirstSearch={isFirstSearch}
        />
      )}
    </main>
  );
}

export default Movies;
