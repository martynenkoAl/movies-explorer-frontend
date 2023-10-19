//api
export const BASE_URL = 'https://api.movies.mart.nomoredomainsicu.ru';
export const FILMS_URL = 'https://api.nomoreparties.co';

//patterns
export const PATTERN_EMAIL = '[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}';

//errors
export const NOT_FOUND_MOVIE = 'Ничего не найдено';
export const ERROR_SEARCH_MOVIE =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const LOGIN_ERR = 'Вы ввели неправильный логин или пароль';
export const INVALID_TOKEN_ERR =
  'При авторизации произошла ошибка. Токен не передан или передан не в том формате';
export const DUPLICATE_USER_ERR = 'Пользователь с таким email уже существует.';
export const REGISTER_ERR = 'При регистрации пользователя произошла ошибка';
export const UPDATE_ERR = 'При обновлении профиля произошла ошибка';
export const SERVER_ERR = 'На сервере произошла ошибка';

//rendering dependencies
export const SCREEN_1024 = 1024;
export const SCREEN_768 = 768;

export const DEFAULT_NUMBER_OF_CARDS = 16;
export const DEFAULT_NUMBER_OF_CARDS_1024 = 8;
export const DEFAULT_NUMBER_OF_CARDS_768 = 5;

export const ADDED_NUMBER_OF_CARDS = 4;
export const ADDED_NUMBER_OF_CARDS_1024 = 2;
export const ADDED_NUMBER_OF_CARDS_768 = 2;

//short movies
export const SHORT_MOVIE_LENGTH = 40;
