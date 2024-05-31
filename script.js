let weather = {
  apiKey: "da7f576e97c368f4b0da48ca1b80f2dd",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } = data.main;
    const { speed } = data.wind;
    /*document.querySelector(".city").innerText = "Weather in " + name;*/
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity:		" + humidity + "%";

    document.querySelector(".wind").innerText =
      "Wind speed:		" + speed + " km/h";
    document.querySelector(".pressure").innerText =
      "Pressure:		" + pressure + "mb";
    document.querySelector(".tempmin").innerText =
      "Min temperature:		" + temp_min + "°C";
    document.querySelector(".feelslike").innerText =
      "Feels like:		" + feels_like + "°C";
    document.querySelector(".tempmax").innerText =
      "Max temperature:		" + temp_max + "°C";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = d.getFullYear();
let month = months[d.getMonth()];
document.getElementById("month").innerHTML = month;
document.getElementById("date").innerHTML = d.getDate();

weather.fetchWeather("Ahmedabad");


var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
  $scope.firstname = "Ahmedabad";
});

function myFunction1() {
  var x = document.getElementById("about");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction2() {
  var x = document.getElementById("hourly");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function myFunction3() {
  var x = document.getElementById("day10");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}