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


function addData(data) {

    // DEFINE UI ELEMENTS

    // wave height 
    const waveHeightContainer = document.querySelector(".wave-height");
    const waveHeight = document.createElement("p");
    waveHeight.textContent = data.current.wave_height;

    // wave direction
    const waveDirectionContainer = document.querySelector(".wave-direction");
    const waveDirection = document.createElement("p");
    waveDirection.textContent = data.current.wave_direction;

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
