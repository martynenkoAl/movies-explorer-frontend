import React from 'react';
import './InfoBlock.css';

export default function InfoBlock({ title, text }) {
  return (
    <div className='info'>
      <h3 className='info__title'>{title}</h3>
      <p className='info__text'>{text}</p>
    </div>
  );
}
