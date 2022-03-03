import React, { useState } from 'react';
import getColor from '../utils/colors-api';

export default function ColorForm({
  setSelectedColor,
  setColorName,
  setRgbVal,
}) {
  const [inputFieldVal, setInputFieldVal] = useState('');
  const colorFormatOptions = [
    { hex: 'a434b7' },
    { rgb: '164,52,183' },
    { hsl: '291,56,46' },
    { cmyk: '10,72,0,28' },
  ];

  return (
    <form
      action=''
      onSubmit={(e) => {
        e.preventDefault();
        const newRgbValue = e.target.children[1].value;
        getColor(newRgbValue).then((res) => {
          setSelectedColor(res);
          setColorName(res.name.value);
          setRgbVal(res.rgb.value.slice(3));
        });
      }}
    >
      <label htmlFor='color-input'>
        Input color value in the format shown below
      </label>
      <input
        value={inputFieldVal}
        type='text'
        name='color-input'
        label='color-input'
        id='color-input'
        onChange={(e) => {
          setInputFieldVal(e.target.value);
        }}
      />
      <ul>
        {colorFormatOptions.map((color) => {
          const key = Object.keys(color)[0];
          return <li key={key}>{`${key}=${color[key]}`}</li>;
        })}
      </ul>

      <button className='submit-color'>Search</button>
    </form>
  );
}
