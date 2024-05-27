const axios = require("axios");

const getWeather = async (location) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${location}` },
    headers: {
      "x-rapidapi-key": "50b8d0c071msh73a931975879612p11d7bdjsna8d600cd33b3",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getWeather;
