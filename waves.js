// FETCH WAVES FROM API //

async function getWaves() {
  const response = await fetch(
    "https://marine-api.open-meteo.com/v1/marine?latitude=-26.6033&longitude=153.091&current=wave_height,wave_direction,wave_period&forecast_days=1"
  );
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const waves = await response.json();

  // log to console
  console.log(waves);

  // return addWavesData function
  addWavesData(waves);
}

// return function
getWaves();

// ------------------- //

// CONVERT WAVE DIRECTION FROM DEGREES TO NORTH-EAST-SOUTH-WEST //

function convertWaveDirection(waves) {
  if (
    waves.current.wave_direction >= 0 &&
    waves.current.wave_direction <= 11.25
  ) {
    return "N";
  } else if (
    waves.current.wave_direction >= 11.25 &&
    waves.current.wave_direction <= 33.75
  ) {
    return "NNE";
  } else if (
    waves.current.wave_direction >= 33.75 &&
    waves.current.wave_direction <= 56.25
  ) {
    return "NE";
  } else if (
    waves.current.wave_direction >= 56.25 &&
    waves.current.wave_direction <= 78.75
  ) {
    return "ENE";
  } else if (
    waves.current.wave_direction >= 78.75 &&
    waves.current.wave_direction <= 101.25
  ) {
    return "E";
  } else if (
    waves.current.wave_direction >= 101.25 &&
    waves.current.wave_direction <= 123.75
  ) {
    return "ESE";
  } else if (
    waves.current.wave_direction >= 123.75 &&
    waves.current.wave_direction <= 146.25
  ) {
    return "SE";
  } else if (
    waves.current.wave_direction >= 146.25 &&
    waves.current.wave_direction <= 168.75
  ) {
    return "SSE";
  } else if (
    waves.current.wave_direction >= 168.75 &&
    waves.current.wave_direction <= 191.25
  ) {
    return "S";
  } else if (
    waves.current.wave_direction >= 191.25 &&
    waves.current.wave_direction <= 213.75
  ) {
    return "SSW";
  } else if (
    waves.current.wave_direction >= 213.75 &&
    waves.current.wave_direction <= 236.25
  ) {
    return "SW";
  } else if (
    waves.current.wave_direction >= 236.25 &&
    waves.current.wave_direction <= 258.75
  ) {
    return "WSW";
  } else if (
    waves.current.wave_direction >= 258.75 &&
    waves.current.wave_direction <= 281.25
  ) {
    return "W";
  } else if (
    waves.current.wave_direction >= 281.25 &&
    waves.current.wave_direction <= 303.75
  ) {
    return "WNW";
  } else if (
    waves.current.wave_direction >= 303.75 &&
    waves.current.wave_direction <= 326.25
  ) {
    return "NW";
  } else if (
    waves.current.wave_direction >= 326.25 &&
    waves.current.wave_direction <= 348.75
  ) {
    return "NNW";
  } else if (
    waves.current.wave_direction >= 348.75 &&
    waves.current.wave_direction <= 360
  ) {
    return "N";
  }
}

// -------------------- //

// ADD DATA TO HTML //

function addWavesData(waves) {
  // wave height & direction

  const waveHeightContainer = document.querySelector(".wave-height");
  const waveHeight = document.createElement("p");
  waveHeight.textContent =
    `${waves.current.wave_height} m / ${(
      waves.current.wave_height * 3.2808
    ).toFixed(2)} ft ` + convertWaveDirection(waves); // use the return value of convertWaveDirection

  // wave period
  const wavePeriodContainer = document.querySelector(".wave-period");
  const wavePeriod = document.createElement("p");
  wavePeriod.textContent = waves.current.wave_period + " secs";

  // APPEND ELEMENTS TO CONTAINER //

  // wave height & direction
  waveHeightContainer.appendChild(waveHeight);

  // wave period
  wavePeriodContainer.appendChild(wavePeriod);
}
// ----------------------------- //