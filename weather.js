const getWeather = () => {
  let apiKey = "f9bfbf24c72d330ba631e31245191610";

  let api = "http://api.openweathermap.org/data/2.5/forecast";

  const success = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city = data.city.name;
        country = data.city.country;
        forecast = data.list;

        day1 = forecast[0];
        day2 = forecast[8];
        day3 = forecast[16];
        day4 = forecast[24];
        day5 = forecast[32];

        const weatherList = [day1, day2, day3, day4, day5];
        for (let i = 0; i < weatherList.length; i++) {
          const card = document.createElement("div");
        }
      });
  };
  const error = () => {
    console.log("error");
  };

  navigator.geolocation.getCurrentPosition(success, error);
};
getWeather();
