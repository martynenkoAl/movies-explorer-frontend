import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
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

function App() {
  const isLoading = false;
  const isLoggedIn = true;
  const [isBurgerMenu, setIsBurgerMenu] = React.useState(false);

  const openBurger = () => {
    setIsBurgerMenu(true);
  };

  const closeBurger = () => {
    setIsBurgerMenu(false);
  };

  return (
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
          element={isLoading ? <Preloader /> : <Movies />}
        />
        <Route
          path='/profile'
          element={isLoading ? <Preloader /> : <Profile />}
        />
        <Route
          path='/signup'
          element={isLoading ? <Preloader /> : <Register />}
        />
        <Route path='/signin' element={isLoading ? <Preloader /> : <Login />} />
        <Route
          path='/movies'
          element={isLoading ? <Preloader /> : <Movies />}
        />
        <Route
          path='/saved-movies'
          element={isLoading ? <Preloader /> : <SavedMovies />}
        />
        <Route path='*' element={isLoading ? <Preloader /> : <NotFound />} />
      </Routes>
      <BurgerMenu onClose={closeBurger} isOpen={isBurgerMenu} />
    </div>
  );
}

export default App;
