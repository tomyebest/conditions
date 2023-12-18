// fetch conditions from api

async function getConditions() {
  const response = await fetch(
    "https://marine-api.open-meteo.com/v1/marine?latitude=-26.6033&longitude=153.091&current=wave_height,wave_direction,wave_period&forecast_days=1"
  );
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const data = await response.json();

  // log to console

  console.log(data);

  // return addData function
  addData(data);
}

 // return function
  getConditions();
// -------------------- //

// add data to frontend using DOM manipulation
{/*
function addData(data) {
  // define ui elements

  const container = document.querySelector(".data-section");

  const waveHeight = document.createElement("p");
  const waveDirection = document.createElement("p");
  const wavePeriod = document.createElement("p");

  // add data to elements

  waveHeight.textContent = data.current.wave_height;
  waveDirection.textContent = data.current.wave_direction;
  wavePeriod.textContent = data.current.wave_period;

  // append elements to container

  container.appendChild(waveHeight);
  container.appendChild(waveDirection);
  container.appendChild(wavePeriod);

}
*/}

// CONVERT WAVE DIRECTION FROM DEGREES TO CARDINAL DIRECTION

function convertWaveDirection(data) {
  // define ui elements

  if (data.current.wave_direction >= 0 && data.current.wave_direction <= 11.25) {
    return "N";
  } else if (data.current.wave_direction >= 11.25 && data.current.wave_direction <= 33.75) {
    return "NNE";
  } else if (data.current.wave_direction >= 33.75 && data.current.wave_direction <= 56.25) {
    return "NE";
  } else if (data.current.wave_direction >= 56.25 && data.current.wave_direction <= 78.75) {
    return "ENE";
  } else if (data.current.wave_direction >= 78.75 && data.current.wave_direction <= 101.25) {
    return "E";
  } else if (data.current.wave_direction >= 101.25 && data.current.wave_direction <= 123.75) {
    return "ESE";
  } else if (data.current.wave_direction >= 123.75 && data.current.wave_direction <= 146.25) {
    return "SE";
  } else if (data.current.wave_direction >= 146.25 && data.current.wave_direction <= 168.75) {
    return "SSE";
  } else if (data.current.wave_direction >= 168.75 && data.current.wave_direction <= 191.25) {
    return "S";
  } else if (data.current.wave_direction >= 191.25 && data.current.wave_direction <= 213.75) {
    return "SSW";
  } else if (data.current.wave_direction >= 213.75 && data.current.wave_direction <= 236.25) {
    return "SW";
  } else if (data.current.wave_direction >= 236.25 && data.current.wave_direction <= 258.75) {
    return "WSW";
  } else if (data.current.wave_direction >= 258.75 && data.current.wave_direction <= 281.25) {
    return "W";
  } else if (data.current.wave_direction >= 281.25 && data.current.wave_direction <= 303.75) {
    return "WNW";
  } else if (data.current.wave_direction >= 303.75 && data.current.wave_direction <= 326.25) {
    return "NW";
  } else if (data.current.wave_direction >= 326.25 && data.current.wave_direction <= 348.75) {
    return "NNW";
  } else if (data.current.wave_direction >= 348.75 && data.current.wave_direction <= 360) {
    return "N";
  }
} 

// -------------------- //

function addData(data) {
  // DEFINE UI ELEMENTS

  // wave height
  const waveHeightContainer = document.querySelector(".wave-height");
  const waveHeight = document.createElement("p");
  waveHeight.textContent =
    `${data.current.wave_height} m / ${
      (data.current.wave_height * 3.2808).toFixed(2)
    } ft ` + convertWaveDirection(data); // use the return value of convertWaveDirection

  // -------------------- //

  // wave direction

  {/*
  const waveDirectionContainer = document.querySelector(".wave-direction");
  const waveDirection = document.createElement("p");
  waveDirection.textContent = data.current.wave_direction + " degrees";
  waveDirection.textContent = convertWaveDirection(data); // use the return value of convertWaveDirection
  */}
  // -------------------- //

  // wave period
  const wavePeriodContainer = document.querySelector(".wave-period");
  const wavePeriod = document.createElement("p");
  wavePeriod.textContent = data.current.wave_period + " secs";

  // APPEND ELEMENTS TO CONTAINER

  // wave height
  waveHeightContainer.appendChild(waveHeight);

  // wave direction
  // waveDirectionContainer.appendChild(waveDirection);

  // wave period
  wavePeriodContainer.appendChild(wavePeriod);
}
// -------------------- //
