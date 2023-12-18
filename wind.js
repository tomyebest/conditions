// FETCH WINDS FROM API //

async function getWinds() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/gfs?latitude=-26.6033&longitude=153.091&current=wind_speed_10m,wind_direction_10m&wind_speed_unit=kn&forecast_days=1"
  );
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const winds = await response.json();

  // log to console
  console.log(winds);

  // return addData function
 addWindsData(winds);
}

// return function
getWinds();

// ------------------- //

// CONVERT WIND DIRECTION FROM DEGREES TO NORTH-EAST-SOUTH-WEST //

function convertWindDirection(winds) {
    if (
        winds.current.wind_direction_10m >= 0 && winds.current.wind_direction_10m <= 11.25 ) {
        return "N"; 
        } else if (
        winds.current.wind_direction_10m >= 11.25 && winds.current.wind_direction_10m <= 33.75 ) {
        return "NNE"; 
        }  else if (
        winds.current.wind_direction_10m >= 33.75 && winds.current.wind_direction_10m <= 56.25 ) {
        return "NE"; 
        } else if (
        winds.current.wind_direction_10m >= 56.25 && winds.current.wind_direction_10m <= 78.75 ) {
        return "ENE"; 
        } else if (
        winds.current.wind_direction_10m >= 78.75 && winds.current.wind_direction_10m <= 101.25 ) {
        return "E"; 
        } else if (
        winds.current.wind_direction_10m >= 101.25 && winds.current.wind_direction_10m <= 123.75 ) {
        return "ESE"; 
        } else if (
        winds.current.wind_direction_10m >= 123.75 && winds.current.wind_direction_10m <= 146.25 ) {
        return "SE"; 
        } else if (
        winds.current.wind_direction_10m >= 146.25 && winds.current.wind_direction_10m <= 168.75 ) {
        return "SSE"; 
        } else if (
        winds.current.wind_direction_10m >= 168.75 && winds.current.wind_direction_10m <= 191.25 ) {
        return "S"; 
        } else if (
        winds.current.wind_direction_10m >= 191.25 && winds.current.wind_direction_10m <= 213.75 ) {
        return "SSW"; 
        } else if (
        winds.current.wind_direction_10m >= 213.75 && winds.current.wind_direction_10m <= 236.25 ) {
        return "SW"; 
        } else if (
        winds.current.wind_direction_10m >= 236.25 && winds.current.wind_direction_10m <= 258.75 ) {
        return "WSW"; 
        } else if (
        winds.current.wind_direction_10m >= 258.75 && winds.current.wind_direction_10m <= 281.25 ) {
        return "W"; 
        } else if (
        winds.current.wind_direction_10m >= 281.25 && winds.current.wind_direction_10m <= 303.75 ) {
        return "WNW"; 
        } else if (
        winds.current.wind_direction_10m >= 303.75 && winds.current.wind_direction_10m <= 326.25 ) {
        return "NW"; 
        } else if (
        winds.current.wind_direction_10m >= 326.25 && winds.current.wind_direction_10m <= 348.75 ) {
        return "NNW"; 
        } else if (
        winds.current.wind_direction_10m >= 348.75 && winds.current.wind_direction_10m <= 360 ) {
        return "N"; 
        }
    }

// ------------------- //

// ADD DATA TO HTML //

function addWindsData(winds) {

  // wind speed
  const windSpeedContainer = document.querySelector(".wind-details");
  const windSpeed = document.createElement("p");
  windSpeed.textContent =
    Math.round(winds.current.wind_speed_10m) + " knots" + " " + convertWindDirection(winds);

  // APPEND ELEMENTS TO CONTAINER //

  // wind speed
  windSpeedContainer.appendChild(windSpeed);

}
// ----------------------------- //