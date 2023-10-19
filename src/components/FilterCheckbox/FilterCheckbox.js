import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ isShort, onSwitch }) {
  return (
    <div className='switch'>
      <input
        onChange={() => onSwitch()}
        className='switch__check'
        type='checkbox'
        id='short'
      />
      <label
        className={!isShort ? 'switch__label_active' : 'switch__label'}
        htmlFor='short'
      >
        <div
          className={
            !isShort ? 'switch__indicator_active' : 'switch__indicator'
          }
        ></div>
      </label>
      <p className='switch__text'>Короткометражки</p>
    </div>
  );
}
