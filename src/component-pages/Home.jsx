import { useEffect, useState } from 'react';
import ColorForm from '../components/ColorForm';
import DetailsCard from '../components/DetailsCard';
import getColor from '../utils/colors-api';
import randomColorGenerator from '../utils/random-color-generator';

export default function Home({ rgbVal, setRgbVal, setSchemes, setColorName }) {
  const [selectedColor, setSelectedColor] = useState({});

  useEffect(() => {
    const color = randomColorGenerator();
    setRgbVal(color);
    getColor(`rgb=${color}`).then((res) => {
      setSelectedColor(res);
      setColorName(res.name.value);
    });
  }, []);

  return (
    <section
      className='homepage main-body'
      style={{ backgroundColor: `rgb${rgbVal}` }}
    >
      <div className='content-wrapper'>
        <section className='color-details'>
          <DetailsCard selectedColor={selectedColor} />
        </section>
        <ColorForm
          setSelectedColor={setSelectedColor}
          setColorName={setColorName}
          setRgbVal={setRgbVal}
          rgbVal={rgbVal}
          setSchemes={setSchemes}
        />
      </div>
    </section>
  );
}
