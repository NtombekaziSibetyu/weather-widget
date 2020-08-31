let current = Date.now()

const getLocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weather);
    }
}
const weather = (position) => {
   
   let apiKey = "f9bfbf24c72d330ba631e31245191610" ;
   let url =`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`;

}
