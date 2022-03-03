const axios = require('axios');

const colorsApi = axios.create({
  baseURL: 'https://www.thecolorapi.com',
});

const getColor = (color) => {
  return colorsApi.get(`/id?${color}`).then(({ data }) => {
    return data;
  });
};

export default getColor;
