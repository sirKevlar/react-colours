import React, { useState } from 'react';
import SchemeList from '../component-pages/SchemeList';
import getColor from '../utils/colors-api';

export default function ColorForm({
  setSelectedColor,
  setColorName,
  setRgbVal,
  rgbVal,
  setSchemes,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const [inputFieldVal, setInputFieldVal] = useState('');

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
      <SchemeList
        rgbVal={rgbVal}
        setSchemes={setSchemes}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </form>
  );
}
