import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  const [checked, setChecked] = React.useState(false);
  const onCheck = () => {
    setChecked(!checked);
  };
  return (
    <div className='switch'>
      <input
        onChange={onCheck}
        className='switch__check'
        type='checkbox'
        id='short'
      />
      <label
        className={checked ? 'switch__label_active' : 'switch__label'}
        htmlFor='short'
      >
        <div
          className={checked ? 'switch__indicator_active' : 'switch__indicator'}
        ></div>
      </label>
      <p className='switch__text'>Короткометражки</p>
    </div>
  );
}
