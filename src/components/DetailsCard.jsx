import React from 'react';

export default function DetailsCard({ selectedColor }) {
  if (!selectedColor.hex) return <h2 className='color-title'>Be Patient</h2>;
  else {
    const colorVals = [
      { hex: selectedColor.hex.value },
      { rgb: selectedColor.rgb.value },
      { hsl: selectedColor.hsl.value },
      { cmyk: selectedColor.cmyk.value },
    ];

    return (
      <div className='details-card'>
        <div className='list-left'>
          <ul className='right-align'>
            {colorVals.map((val) => {
              const key = Object.keys(val)[0];
              return (
                <li className='color-val-list' key={key}>
                  {key}:
                </li>
              );
            })}
          </ul>
        </div>
        <div className='list-right'>
          <ul className='left-align'>
            {colorVals.map((val) => {
              const key = Object.keys(val)[0];
              return (
                <li className='color-val-list' key={key}>
                  {val[key]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
