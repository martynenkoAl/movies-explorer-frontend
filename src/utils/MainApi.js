import { BASE_URL } from './constants';

const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

const request = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options).then(getResponse);
};

const register = (name, email, password) => {
  return request(`/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
};

const login = (email, password) => {
  return request(`/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

const getUserInfo = (token) => {
  return request(`/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const updateUserInfo = (name, email, token) => {
  return request(`/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });
};

const getSavedMovies = (token) => {
  return request(`/movies`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const saveMovie = (movie, token) => {
  return request(`/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    }),
  });
};

const deleteMovie = (movieId, token) => {
  return request(`/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

const MainApi = {
  register,
  login,
  getUserInfo,
  updateUserInfo,
  saveMovie,
  getSavedMovies,
  deleteMovie,
};

export default MainApi;
