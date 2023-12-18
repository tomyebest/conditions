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
// -------------------- //

function addData(data) {
  // DEFINE UI ELEMENTS

  // wave height
  const waveHeightContainer = document.querySelector(".wave-height");
  const waveHeight = document.createElement("p");
  waveHeight.textContent = `${data.current.wave_height} metres / ${
    data.current.wave_height * 3.2808
  } feet`;

  // -------------------- //

  // wave direction (we need to convert degrees to cardinal direction here)

  function convertWaveDirection(data) {
    // define ui elements
    const waveDirectionContainer = document.querySelector(".wave-direction");
    const waveDirection = document.createElement("p");

    //   // convert degrees to cardinal direction
    //   if (data.current.wind_direction >= 0 && data.current.wind_direction <= 11.25) {
    //     windDirectionCardinal.textContent = "North";
    //   } else if (data.current.wind_direction >= 11.25 && data.current.wind_direction <= 33.75) {

    waveDirection.textContent = data.current.wave_direction + " degrees";
  }




  // -------------------- //

  // wave period
  const wavePeriodContainer = document.querySelector(".wave-period");
  const wavePeriod = document.createElement("p");
  wavePeriod.textContent = data.current.wave_period + " seconds";

  // APPEND ELEMENTS TO CONTAINER

  // wave height
  waveHeightContainer.appendChild(waveHeight);

  // wave direction
  waveDirectionContainer.appendChild(waveDirection);

  // wave period
  wavePeriodContainer.appendChild(wavePeriod);
}
// -------------------- //
