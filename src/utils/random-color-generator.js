const randomColorGenerator = () => {
  const redVal = Math.ceil(Math.random() * 256);
  const greenVal = Math.ceil(Math.random() * 256);
  const blueVal = Math.ceil(Math.random() * 256);

  return `(${redVal}, ${blueVal}, ${greenVal})`;
};

export default randomColorGenerator;
