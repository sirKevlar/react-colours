import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getColor from '../utils/colors-api';

export default function SchemeList({
  rgbVal,
  setSchemes,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const urlEnd = window.location.href.slice(-7);
  const navigate = useNavigate();

  const colorFormatOptions = [
    { hex: 'a434b7' },
    { rgb: '164,52,183' },
    { hsl: '291,56,46' },
    { cmyk: '10,72,0,28' },
  ];
  const schemeOptions = [
    'monochrome',
    'monochrome-dark',
    'monochrome-light',
    'analogic',
    'complement',
    'analogic-complement',
    'triad',
    'quad',
  ];

  const schemesToggle = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const schemeSelected = (e) => {
    getColor(`rgb=${rgbVal}`, e.target.innerText)
      .then((res) => {
        setSchemes(res);
        setIsMenuOpen(false);
        navigate('/schemes');
      })
      .catch(console.log);
  };
  return (
    <div>
      {urlEnd !== 'schemes' && 
        <>
          <ul>
            {colorFormatOptions.map((color) => {
              const key = Object.keys(color)[0];
              return <li key={key}>{`${key}=${color[key]}`}</li>;
            })}
          </ul>

          <button className='submit-color'>Find Color</button>
        </>
      }
      <button onClick={schemesToggle} className='complimentary-colors'>
        {isMenuOpen ? 'Close Menu' : 'Generate Scheme'}
      </button>
      {isMenuOpen ? (
        <ul className='scheme-selector'>
          {schemeOptions.map((option) => {
            return (
              <li
                key={option}
                onClick={schemeSelected}
                className='scheme-options'
              >
                {option}
              </li>
            );
          })}
        </ul>
      ) : (
        <p id='scheme-para'>Click generate scheme button for scheme options</p>
      )}
    </div>
  );
}
