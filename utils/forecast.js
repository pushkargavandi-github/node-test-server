const request = require("request");

const forecast = (lat, lon, loc, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=eb34c57155f37f6918c4e51c33e89a52&query=" +
    lat +
    "," +
    lon;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to service", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      const currentData = response.body.current;
      callback(
        undefined,
        currentData.weather_descriptions[0] +
          ". It is currently " +
          currentData.temperature +
          " degrees out. It feels like " +
          currentData.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
