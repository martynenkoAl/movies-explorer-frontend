import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__info'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__box'>
        <p className='footer__date'>{`© ${new Date().getFullYear()}`}</p>
        <div className='footer__links'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://practicum.yandex.ru/'
            className='footer__link'
          >
            Яндекс.Практикум
          </a>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://github.com/martynenkoAl'
            className='footer__link'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
