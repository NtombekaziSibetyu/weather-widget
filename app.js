
const getWeather = () => {

    let apiKey = "f9bfbf24c72d330ba631e31245191610" 

    let api ="http://api.openweathermap.org/data/2.5/forecast"

    const success = (position) => {

        const currentDay = document.getElementById("date")
        const temperature = document.getElementById("temp")
        const weatherIcon = document.getElementById("wicon")
        const lowTemp = document.getElementById("min_temp")
        const highTemp = document.getElementById("max_temp")
        const decription = document.getElementById("decription")
        const location = document.getElementById("location")

        const followingDay = document.getElementById("date2")
        const temperature2 = document.getElementById("temp2")
        const weatherIcon2 = document.getElementById("wicon2")
        const lowTemp2 = document.getElementById("min_temp2")
        const highTemp2 = document.getElementById("max_temp2")
        const decription2 = document.getElementById("decription2")

        const thirdDay = document.getElementById("date3")
        const temperature3 = document.getElementById("temp3")
        const weatherIcon3 = document.getElementById("wicon3")
        const lowTemp3 = document.getElementById("min_temp3")
        const highTemp3 = document.getElementById("max_temp3")
        const decription3 = document.getElementById("decription3")

        const fourthDay = document.getElementById("date4")
        const temperature4 = document.getElementById("temp4")
        const weatherIcon4 = document.getElementById("wicon4")
        const lowTemp4 = document.getElementById("min_temp4")
        const highTemp4 = document.getElementById("max_temp4")
        const decription4 = document.getElementById("decription4")

        const fifthDay = document.getElementById("date5")
        const temperature5 = document.getElementById("temp5")
        const weatherIcon5 = document.getElementById("wicon5")
        const lowTemp5 = document.getElementById("min_temp5")
        const highTemp5 = document.getElementById("max_temp5")
        const decription5 = document.getElementById("decription5")

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        url = api + "?lat=" + latitude +"&lon="+ longitude +"&appid="+ apiKey;
        
        fetch(url).then( response => response.json() )
        .then( data => {
            console.log(data)
            city = data.city.name
            country = data.city.country
            forecast = data.list
            
            console.log(city, country)

            day1 = forecast[0]
            day2 = forecast[8]
            day3 = forecast[16]
            day4 = forecast[24]
            day5 = forecast[32]
            
            console.log(day1, day2, day3, day4, day5)

            const weatherList = [day1, day2, day3, day4, day5]

            date = day1.dt_txt
            temp = Math.floor(day1.main.temp - 273)
            min = Math.floor(day1.main.temp_min - 273)
            max = Math.floor(day1.main.temp_max - 273)
            des = day1.weather[0].description
            icon = day1.weather[0].icon
            iconUrl = "http://openweathermap.org/img/w/" + icon + ".png"
             
            date2 = day2.dt_txt
            temp2 = Math.floor(day2.main.temp - 273)
            min2 = Math.floor(day2.main.temp_min - 273)
            max2 = Math.floor(day2.main.temp_max - 273)
            des2 = day2.weather[0].description
            icon2 = day2.weather[0].icon
            iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png"

            date3 = day3.dt_txt
            temp3 = Math.floor(day3.main.temp - 273)
            min3 = Math.floor(day3.main.temp_min - 273)
            max3 = Math.floor(day3.main.temp_max - 273)
            des3 = day3.weather[0].description
            icon3 = day3.weather[0].icon
            iconUrl3 = "http://openweathermap.org/img/w/" + icon3 + ".png"

            date4 = day4.dt_txt
            temp4 = Math.floor(day4.main.temp - 273)
            min4 = Math.floor(day4.main.temp_min - 273)
            max4 = Math.floor(day4.main.temp_max - 273)
            des4 = day4.weather[0].description
            icon4 = day4.weather[0].icon
            iconUrl4 = "http://openweathermap.org/img/w/" + icon4 + ".png"

            date5 = day5.dt_txt
            temp5 = Math.floor(day5.main.temp - 273)
            min5 = Math.floor(day5.main.temp_min - 273)
            max5 = Math.floor(day5.main.temp_max - 273)
            des5 = day5.weather[0].description
            icon5 = day5.weather[0].icon
            iconUrl5 = "http://openweathermap.org/img/w/" + icon5 + ".png"

            location.innerHTML = city
            currentDay.innerHTML = date
            weatherIcon.setAttribute("src",iconUrl)
            temperature.innerHTML = temp
            weatherIcon.innerHTML = icon
            lowTemp.innerHTML = min
            highTemp.innerHTML = max
            decription.innerHTML = des

            followingDay.innerHTML = date2
            weatherIcon2.setAttribute("src",iconUrl2)
            temperature2.innerHTML = temp2
            weatherIcon2.innerHTML = icon2
            lowTemp2.innerHTML = min2
            highTemp2.innerHTML = max2
            decription2.innerHTML = des2

            thirdDay.innerHTML = date3
            weatherIcon3.setAttribute("src",iconUrl3)
            temperature3.innerHTML = temp3
            weatherIcon3.innerHTML = icon3
            lowTemp3.innerHTML = min3
            highTemp3.innerHTML = max3
            decription3.innerHTML = des3

            fourthDay.innerHTML = date4
            weatherIcon4.setAttribute("src",iconUrl4)
            temperature4.innerHTML = temp4
            weatherIcon4.innerHTML = icon4
            lowTemp4.innerHTML = min4
            highTemp4.innerHTML = max4
            decription4.innerHTML = des4

            fifthDay.innerHTML = date5
            weatherIcon5.setAttribute("src",iconUrl5)
            temperature5.innerHTML = temp5
            weatherIcon5.innerHTML = icon5
            lowTemp5.innerHTML = min5
            highTemp5.innerHTML = max5
            decription5.innerHTML = des5
                 
        })
        console.log(position)
    }
    const error = () => {
        console.log("error")
    }

    navigator.geolocation.getCurrentPosition(success, error);
  
}

getWeather()