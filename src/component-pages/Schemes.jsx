import React, { useState } from 'react';
import SchemeList from './SchemeList';

export default function Schemes({
  rgbVal,
  schemes,
  setSchemes,
  displayFullDetails,
  setDisplayFullDetails,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <section
      className='homepage main-body'
      style={{ backgroundColor: `rgb${rgbVal}` }}
    >
      {!isMenuOpen && (
        <h2>Hit the button for full breakdown of color values</h2>
      )}
      {!isMenuOpen && (
        <button
          id='details-button'
          onClick={() => {
            setDisplayFullDetails(!displayFullDetails);
          }}
        >
          Scheme Details
        </button>
      )}
      <SchemeList
        rgbVal={rgbVal}
        setSchemes={setSchemes}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className='scheme-list'>
        {!schemes ? (
          <h2>Be Patient!</h2>
        ) : displayFullDetails ? (
          schemes.colors.map((scheme) => {
            const randomId = Math.ceil(Math.random() * 1000000);
            return (
              <div
                style={{ background: 'black' }}
                className='small-card'
                alt={scheme.name.value}
                key={`${scheme.name.value}${randomId}`}
              >
                <h6 className='scheme-details'>{scheme.name.value}</h6>
                <h6 className='scheme-details'>{scheme.hex.value}</h6>
                <h6 className='scheme-details'>{scheme.rgb.value}</h6>
                <h6 className='scheme-details'>{scheme.hsl.value}</h6>
                <h6 className='scheme-details' id='bottom-one'>
                  {scheme.cmyk.value}
                </h6>
              </div>
            );
          })
        ) : (
          schemes.colors.map((scheme) => {
            const randomId = Math.ceil(Math.random() * 1000000);
            return (
              <img
                src={scheme.image.named}
                className='small-card'
                alt={scheme.name.value}
                key={`${scheme.name.value}${randomId}`}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
