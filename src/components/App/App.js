import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';

// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {
  DUPLICATE_USER_ERR,
  REGISTER_ERR,
  UPDATE_ERR,
  SERVER_ERR,
  LOGIN_ERR,
  INVALID_TOKEN_ERR,
} from '../../utils/constants';
import MainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [textError, setTextError] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.jwt) {
      MainApi.getUserInfo(localStorage.jwt)
        .then((user) => {
          setIsLoggedIn(true);
          setCurrentUser(user);
          setIsLoaded(true);
        })
        .catch((error) => {
          console.error(`ошибка при загрузке данных ${error}`);
          setIsLoaded(true);
          localStorage.clear();
        });

      MainApi.getSavedMovies(localStorage.jwt)
        .then((movie) => {
          setSavedMovies(movie);
          setIsLoaded(true);
        })
        .catch((error) => {
          console.error(`ошибка при загрузке данных ${error}`);
          setIsLoaded(true);
          localStorage.clear();
        });
    } else {
      setIsLoggedIn(false);
      setIsLoaded(true);
    }
  }, [isLoggedIn]);

  const openBurger = () => {
    setIsBurgerMenu(true);
  };

  const closeBurger = () => {
    setIsBurgerMenu(false);
  };

  function handleMovieDelete(movie) {
    MainApi.deleteMovie(movie, localStorage.jwt)
      .then(() => {
        setSavedMovies(savedMovies.filter((m) => m._id !== movie));
      })
      .catch((error) => console.error(`ошибка при удалении фильма ${error}`));
  }

  function handleMovieSave(movie) {
    const isSelected = savedMovies.some((m) => m.movieId === movie.id);
    const selectedMovies = savedMovies.filter((m) => m.movieId === movie.id);
    if (isSelected) {
      handleMovieDelete(selectedMovies[0]._id);
    } else {
      MainApi.saveMovie(movie, localStorage.jwt)
        .then((newMovie) => {
          setSavedMovies([newMovie, ...savedMovies]);
        })
        .catch((error) =>
          console.error(`ошибка при сохранении фильма ${error}`)
        );
    }
  }

  function handleUpdateUser(name, email) {
    setIsLoading(true);
    MainApi.updateUserInfo(name, email, localStorage.jwt)
      .then((data) => {
        setCurrentUser(data);
        setIsUpdated(true);
      })
      .catch((error) => {
        setIsError(true);
        console.error(`ошибка при редактировании профиля ${error}`);
        error === 'Ошибка: 409'
          ? setTextError(DUPLICATE_USER_ERR)
          : error === 'Ошибка: 400'
          ? setTextError(UPDATE_ERR)
          : setTextError(SERVER_ERR);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignIn(email, password) {
    setIsLoading(true);
    MainApi.login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch((error) => {
        setIsError(true);
        console.error(`ошибка при авторизции ${error}`);
        error === 'Ошибка: 401'
          ? setTextError(LOGIN_ERR)
          : error === 'Ошибка: 400'
          ? setTextError(INVALID_TOKEN_ERR)
          : setTextError('');
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignUp(name, email, password) {
    setIsLoading(true);
    MainApi.register(name, email, password)
      .then((data) => {
        if (data) {
          console.log(data);
          handleSignIn(email, password);
        }
      })
      .catch((error) => {
        setIsError(true);
        console.error(`ошибка при регистрации ${error}`);
        error === 'Ошибка: 409'
          ? setTextError(DUPLICATE_USER_ERR)
          : error === 'Ошибка: 400'
          ? setTextError(REGISTER_ERR)
          : setTextError('');
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    isLoaded && (
      <CurrentUserContext.Provider value={currentUser}>
        <div className='page'>
          <Header
            isLoggedIn={isLoggedIn}
            clickBurger={openBurger}
            closeBurger={closeBurger}
          />
          <Routes>
            <Route path='/' element={isLoading ? <Preloader /> : <Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={Movies}
                  savedMovies={savedMovies}
                  onLike={handleMovieSave}
                  onDelete={handleMovieDelete}
                ></ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  element={Profile}
                  isLoggedIn={isLoggedIn}
                  onSignOut={handleSignOut}
                  onEdit={handleUpdateUser}
                  setIsError={setIsError}
                  textError={textError}
                  isLoading={isLoading}
                  isError={isError}
                  isUpdated={isUpdated}
                ></ProtectedRoute>
              }
            />
            <Route
              path='/signup'
              element={
                isLoggedIn ? (
                  <Navigate to='/movies' replace />
                ) : (
                  <Register
                    onSignUp={handleSignUp}
                    isLoading={isLoading}
                    isError={isError}
                    setIsError={setIsError}
                    textError={textError}
                  />
                )
              }
            />
            <Route
              path='/signin'
              element={
                isLoggedIn ? (
                  <Navigate to='/movies' replace />
                ) : (
                  <Login
                    onSignIn={handleSignIn}
                    isLoading={isLoading}
                    isError={isError}
                    setIsError={setIsError}
                    textError={textError}
                  />
                )
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isLoggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  isError={isError}
                  setIsError={setIsError}
                  textError={textError}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  onDelete={handleMovieDelete}
                ></ProtectedRoute>
              }
            />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/404' replace />} />
          </Routes>
          <Footer />
          <BurgerMenu onClose={closeBurger} isOpen={isBurgerMenu} />
        </div>
      </CurrentUserContext.Provider>
    )
  );
}

export default App;
