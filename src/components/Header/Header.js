import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
import GuestHeader from '../GuestHeader/GuestHeader';

function Header({ isLoggedIn, clickBurger }) {
  const location = useLocation();
  if (
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile'
  )
    return (
      <header className='header'>
        <Routes>
          <Route
            path='/'
            element={
              isLoggedIn ? (
                <UserHeader clickBurger={clickBurger} />
              ) : (
                <GuestHeader />
              )
            }
          ></Route>
          <Route
            path='/movies'
            element={<UserHeader clickBurger={clickBurger} />}
          ></Route>
          <Route
            path='/saved-movies'
            element={<UserHeader clickBurger={clickBurger} />}
          ></Route>
          <Route
            path='/profile'
            element={<UserHeader clickBurger={clickBurger} />}
          ></Route>
        </Routes>
      </header>
    );
}

export default Header;
