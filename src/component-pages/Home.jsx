import { useEffect, useState } from 'react';
import DetailsCard from '../components/DetailsCard';
import getColor from '../utils/colors-api';
import randomColorGenerator from '../utils/random-color-generator';

export default function Home() {
  const [selectedColor, setSelectedColor] = useState({});
  const [randomColorName, setRandomColorName] = useState('');
  const [rgbVal, setRgbVal] = useState('');

  useEffect(() => {
    const color = randomColorGenerator();
    setRgbVal(color);
    getColor(color).then((res) => {
      setSelectedColor(res);
      setRandomColorName(res.name.value);
    });
  }, []);

  return (
    <section
      className='homepage main-body'
      style={{ 'background-color': `rgb${rgbVal}` }}
    >
      <h2 className='color-title'>{randomColorName}</h2>
      <DetailsCard selectedColor={selectedColor} />
    </section>
  );
}
