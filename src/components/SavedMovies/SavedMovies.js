import React, { useState, useCallback, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ savedMovies, onDelete, isLoading }) {
  const [searchText, setSearchText] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isNothingFound, setIsNothingFound] = useState(false);

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
    setSearchText(search);
    setFilteredMovies(
      isShort ? filterShortMovies(searchedMovies) : searchedMovies
    );
  }, []);

  function handleSearchMovie(search) {
    handleFilterMovies(savedMovies, search, isShort);
  }

  function handleSwitchShort() {
    if (isShort) {
      setIsShort(false);
      handleFilterMovies(savedMovies, searchText, false);
    } else {
      setIsShort(true);
      handleFilterMovies(savedMovies, searchText, true);
    }
  }

  useEffect(() => {
    handleFilterMovies(savedMovies, searchText, isShort);
  }, [handleFilterMovies, savedMovies, searchText, isShort]);

  return (
    <main className='saved-movies'>
      <SearchForm
        onSearch={handleSearchMovie}
        isShort={isShort}
        searchText={searchText}
        onSwitch={handleSwitchShort}
        savedMovies={savedMovies}
        isLoading={isLoading}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={filteredMovies}
          savedMovies={savedMovies}
          isNothingFound={isNothingFound}
          setIsNothingFound={setIsNothingFound}
          onDelete={onDelete}
        />
      )}
    </main>
  );
}

export default SavedMovies;
