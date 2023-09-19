import React from 'react';
import Tab from '../Tab/Tab';
import InfoBlock from './InfoBlock/InfoBlock';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='project' id='project'>
      <Tab title='О проекте' />
      <div className='project__info'>
        <InfoBlock
          title='Дипломный проект включал 5 этапов'
          text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
        />
        <InfoBlock
          title='На выполнение диплома ушло 5 недель'
          text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
        />
      </div>
      <div className='project__data'>
        <div className='project__scale_green'>1 неделя</div>
        <div className='project__scale_grey'>4 недели</div>
        <p className='project__text_green'>Back-end</p>
        <p className='project__text_grey'>Front-end</p>
      </div>
    </section>
  );
}
