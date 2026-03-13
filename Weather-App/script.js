async function getWeather(){

let city = document.getElementById("cityInput").value;

if(city === ""){
document.getElementById("weatherResult").innerHTML="⚠ Please enter city name";
return;
}

document.getElementById("weatherResult").innerHTML="⏳ Loading Weather...";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64bf27e3640db48514465d78b099d531&units=metric`;

let response = await fetch(url);

let data = await response.json();

if(data.cod == "404"){
document.getElementById("weatherResult").innerHTML="❌ City not found";
return;
}

let weather = data.weather[0].main;

let icon = "☁️";

if(weather === "Clear"){
icon = "☀️";
document.body.style.background="linear-gradient(135deg,#f6d365,#fda085)";
}

else if(weather === "Rain"){
icon = "🌧️";
document.body.style.background="linear-gradient(135deg,#4facfe,#00f2fe)";
}

else if(weather === "Clouds"){
icon = "☁️";
document.body.style.background="linear-gradient(135deg,#bdc3c7,#2c3e50)";
}

else if(weather === "Thunderstorm"){
icon = "⛈️";
document.body.style.background="linear-gradient(135deg,#373B44,#4286f4)";
}

else if(weather === "Snow"){
icon = "❄️";
document.body.style.background="linear-gradient(135deg,#e6dada,#274046)";
}

let result = `

<h2>${icon} ${data.name}</h2>

<p>🌡 Temperature: ${data.main.temp} °C</p>

<p>🌤 Weather: ${data.weather[0].main}</p>

<p>💧 Humidity: ${data.main.humidity}%</p>

<p>🌬 Wind: ${data.wind.speed} km/h</p>

`;

document.getElementById("weatherResult").innerHTML = result;

}


// ENTER key search feature
document.getElementById("cityInput").addEventListener("keypress", function(event){

if(event.key === "Enter"){
getWeather();
}

});