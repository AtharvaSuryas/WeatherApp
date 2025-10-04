const apiKeys = "ec41f0210b8c4967b50162d0be7b90b5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=ec41f0210b8c4967b50162d0be7b90b5&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
let weatherIcon = document.querySelector(".weather-icon");

const backgroundImg = document.querySelector(".card");

async function checkweather(city) {
    const response = await fetch(apiUrl + city);
    let data = await response.json()
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";
    document.querySelector(".minTemp").innerHTML = data.main.temp_min+"°C";
    document.querySelector(".maxTemp").innerHTML = data.main.temp_max+"°C";

    // if(data.weather[0].main == "Clouds"){
    //     weatherIcon.src = "./images/clouds.png";
    // }else if(data.weather[0].main == "Clear"){
    //     weatherIcon.src = "./images/clear.png";
    // }else if(data.weather[0].main == "Rain"){
    //     weatherIcon.src = "./images/rain.png";
    // }else if(data.weather[0].main == "Drizzle"){
    //     weatherIcon.src = "./images/drizzle.png";
    // }else if(data.weather[0].main == "Snow"){
    //     weatherIcon.src = "./images/snow.png";
    // }else if(data.weather[0].main == "Mist"){
    //     weatherIcon.src = "./images/mist.png"
    // }


        if(data.weather[0].main == "Clouds"){
        backgroundImg.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/918/421/HD-wallpaper-partly-cloudy-clouds-nature-sky-weather.jpg')";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener('click',()=>{
    checkweather(searchBox.value);
})

searchBox.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        event.preventDefault();
        checkweather(searchBox.value);
    }
})