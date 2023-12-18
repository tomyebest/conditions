// FETCH WAVES FROM API //

async function getWaves() {
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
getWaves();

// ------------------- //

// CONVERT WAVE DIRECTION FROM DEGREES TO NORTH-EAST-SOUTH-WEST //

function convertWaveDirection(data) {

  if (
    data.current.wave_direction >= 0 &&
    data.current.wave_direction <= 11.25
  ) {
    return "N";
  } else if (
    data.current.wave_direction >= 11.25 &&
    data.current.wave_direction <= 33.75
  ) {
    return "NNE";
  } else if (
    data.current.wave_direction >= 33.75 &&
    data.current.wave_direction <= 56.25
  ) {
    return "NE";
  } else if (
    data.current.wave_direction >= 56.25 &&
    data.current.wave_direction <= 78.75
  ) {
    return "ENE";
  } else if (
    data.current.wave_direction >= 78.75 &&
    data.current.wave_direction <= 101.25
  ) {
    return "E";
  } else if (
    data.current.wave_direction >= 101.25 &&
    data.current.wave_direction <= 123.75
  ) {
    return "ESE";
  } else if (
    data.current.wave_direction >= 123.75 &&
    data.current.wave_direction <= 146.25
  ) {
    return "SE";
  } else if (
    data.current.wave_direction >= 146.25 &&
    data.current.wave_direction <= 168.75
  ) {
    return "SSE";
  } else if (
    data.current.wave_direction >= 168.75 &&
    data.current.wave_direction <= 191.25
  ) {
    return "S";
  } else if (
    data.current.wave_direction >= 191.25 &&
    data.current.wave_direction <= 213.75
  ) {
    return "SSW";
  } else if (
    data.current.wave_direction >= 213.75 &&
    data.current.wave_direction <= 236.25
  ) {
    return "SW";
  } else if (
    data.current.wave_direction >= 236.25 &&
    data.current.wave_direction <= 258.75
  ) {
    return "WSW";
  } else if (
    data.current.wave_direction >= 258.75 &&
    data.current.wave_direction <= 281.25
  ) {
    return "W";
  } else if (
    data.current.wave_direction >= 281.25 &&
    data.current.wave_direction <= 303.75
  ) {
    return "WNW";
  } else if (
    data.current.wave_direction >= 303.75 &&
    data.current.wave_direction <= 326.25
  ) {
    return "NW";
  } else if (
    data.current.wave_direction >= 326.25 &&
    data.current.wave_direction <= 348.75
  ) {
    return "NNW";
  } else if (
    data.current.wave_direction >= 348.75 &&
    data.current.wave_direction <= 360
  ) {
    return "N";
  }
}

// -------------------- //

// ADD DATA TO HTML //

function addData(data) {

  // wave height & direction 

  const waveHeightContainer = document.querySelector(".wave-height");
  const waveHeight = document.createElement("p");
  waveHeight.textContent =
    `${data.current.wave_height} m / ${(
      data.current.wave_height * 3.2808
    ).toFixed(2)} ft ` + convertWaveDirection(data); // use the return value of convertWaveDirection


  // wave period
  const wavePeriodContainer = document.querySelector(".wave-period");
  const wavePeriod = document.createElement("p");
  wavePeriod.textContent = data.current.wave_period + " secs";

  // APPEND ELEMENTS TO CONTAINER

  // wave height & direction
  waveHeightContainer.appendChild(waveHeight);

  // wave period
  wavePeriodContainer.appendChild(wavePeriod);
}
// -------------------- //
