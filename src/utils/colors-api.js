const axios = require('axios');

const colorsApi = axios.create({
  baseURL: 'https://www.thecolorapi.com',
});

const getColor = (color) => {
  return colorsApi.get(`/id?rgb=${color}`).then(({ data }) => {
    return data;
  });
};

export default getColor;
