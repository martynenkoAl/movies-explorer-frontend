import React from 'react';
import './Portfolio.css';
import arrow from '../../images/portfolio-arrow.svg';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__heading'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__link'>
          <a className='portfolio__item' href='https://ya.ru/'>
            <p className='portfolio__item-name'>Статичный сайт</p>
            <img src={arrow} alt='Стрелка' className='portfolio__icon' />
          </a>
        </li>
        <li className='portfolio__link'>
          <a className='portfolio__item' href='https://ya.ru/'>
            <p className='portfolio__item-name'>Адаптивный сайт</p>
            <img src={arrow} alt='Стрелка' className='portfolio__icon' />
          </a>
        </li>
        <li className='portfolio__link'>
          <a className='portfolio__item' href='https://ya.ru/'>
            <p className='portfolio__item-name'>Одностраничное приложение</p>
            <img src={arrow} alt='Стрелка' className='portfolio__icon' />
          </a>
        </li>
      </ul>
    </section>
  );
}
