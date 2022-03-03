import { useEffect, useState } from 'react';
import ColorForm from '../components/ColorForm';
import DetailsCard from '../components/DetailsCard';
import getColor from '../utils/colors-api';
import randomColorGenerator from '../utils/random-color-generator';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState({});
  const [colorName, setColorName] = useState('');
  const [rgbVal, setRgbVal] = useState('');

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
      <section className='color-details'>
        <h2 className='color-title'>{colorName}</h2>
        <DetailsCard selectedColor={selectedColor} />
      </section>
      <ColorForm
        setSelectedColor={setSelectedColor}
        setColorName={setColorName}
        setRgbVal={setRgbVal}
      />
    </section>
  );
}
