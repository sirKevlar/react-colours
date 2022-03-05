const axios = require('axios');

const colorsApi = axios.create({
  baseURL: 'https://www.thecolorapi.com',
});

const getColor = (color, scheme) => {
  let queryStr = `/id?${color}`;
  if (scheme) queryStr = `/scheme?${color}&mode=${scheme}&count=16`;

  return colorsApi.get(queryStr).then(({ data }) => {
    return data;
  });
};

export default getColor;
