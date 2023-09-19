import React from 'react';
import './AboutMe.css';
import Tab from '../Tab/Tab';

export default function AboutMe() {
  return (
    <section className='student'>
      <Tab title='Студент' />
      <div className='student__block'>
        <div className='student__info'>
          <h2 className='student__title'>Виталий</h2>
          <h3 className='student__subtitle'>Фронтенд-разработчик, 30 лет</h3>
          <p className='student__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className='student__link' href='https://ya.ru/'>
            Github
          </a>
        </div>
        <div className='student__picture'></div>
      </div>
    </section>
  );
}
