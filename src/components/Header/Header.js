import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
import GuestHeader from '../GuestHeader/GuestHeader';

function Header({ isLoggedIn, clickBurger }) {
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
