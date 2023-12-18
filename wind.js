// FETCH WINDS FROM API //

async function getWinds() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/gfs?latitude=-26.6033&longitude=153.091&current=wind_speed_10m&wind_speed_unit=kn&forecast_days=1"
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

// ADD DATA TO HTML //

function addWindsData(winds) {
  // wind height & direction

  const windContainer = document.querySelector(".wind-details");
  const windDetails = document.createElement("p");
  windDetails.textContent = winds.current.wind_speed_10m + " kn";
  

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