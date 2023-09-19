import React from 'react';
import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <img
        className='promo__logo'
        src={landingLogo}
        alt='Логотип веб-проекта'
      />
      <div className='promo__info'>
        <h1 className='promo__heading'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className='promo__text'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href='#project' className='promo__btn'>
          Узнать больше
        </a>
      </div>
    </section>
  );
}
