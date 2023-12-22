// FETCH WAVES AND WINDS FROM API //

async function getData(waves, winds) {
  const wavesPromise = fetch(
    "https://marine-api.open-meteo.com/v1/marine?latitude=-26.6033&longitude=153.091&current=wave_height,wave_direction,wave_period&forecast_days=1"
  ).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  });

  const windsPromise = fetch(
    "https://api.open-meteo.com/v1/gfs?latitude=-26.6033&longitude=153.091&current=wind_speed_10m,wind_direction_10m&wind_speed_unit=kn&forecast_days=1"
  ).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  });

  try {
    // Use Promise.all to wait for both promises to resolve
    const [waves, winds] = await Promise.all([wavesPromise, windsPromise]);

    // Log waves and winds to console
    console.log(waves);
    console.log(winds);

    // Call functions to process the data
    addWavesData(waves);
    addWindsData(winds);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch data
getData();

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

// READ CONDITIONS AND RECOMMEND ACTIONS FOR THE USER //

// waves.current.wave_height
// winds.current.wind_speed_10m
// winds.current.direction
// waves.current.wave_period

function recomLogic(waves, winds) {

  console.log("Waves:", waves);
  console.log("Winds:", winds);

  // If wind speed is greater than 5 knots
  if (winds.current.wind_speed_10m > 5) {
    const windDirection = winds.current.direction;

    // 1
    if (
      ((windDirection >= 270 && windDirection <= 360) ||
        (windDirection >= 0 && windDirection <= 90)) &&
      waves.current.wave_height >= 0.5 &&
      waves.current.wave_height <= 1.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 10
    ) {
      return "Try the open beaches";
    }
    // 2
    else if (
      windDirection >= 0 &&
      windDirection <= 40 &&
      waves.current.wave_height >= 0.5 &&
      waves.current.wave_height <= 1.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 10
    ) {
      return "Seek shelter at a backbeach";
    }
    // 3
    else if (
      windDirection >= 200 &&
      windDirection <= 220 &&
      waves.current.wave_height >= 0.5 &&
      waves.current.wave_height <= 1.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 10
    ) {
      return "Find shelter at or up to 200m from a north-facing headland";
    }
    // 4
    else if (
      windDirection >= 200 &&
      windDirection <= 320 &&
      waves.current.wave_height > 1.5 &&
      waves.current.wave_height <= 2.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 12
    ) {
      return "Try the outer points (knowing your limitations)";
    }
    // 5
    else if (
      windDirection >= 0 &&
      windDirection <= 360 &&
      waves.current.wave_height > 1.5 &&
      waves.current.wave_height <= 2.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 12
    ) {
      return "It's probably not worth it";
    }
    // 6
    else if (
      windDirection >= 180 &&
      windDirection <= 270 &&
      waves.current.wave_height > 1.5 &&
      waves.current.wave_height <= 2.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 12
    ) {
      return "Head to a pointbreak. Exercise patience and the utmost etiquette";
    }
    // 7
    else if (
      waves.current.wave_height > 0.5 &&
      waves.current.wave_period <= 6
    ) {
      return "It looks like a windswell in the water. Go check out your local but keep expectations low";
    }
    // 8
    else if (waves.current.wave_period > 12) {
      return "It looks like a solid groundswell in the water. Check out the surf report and know your limitations";
    }
    // 9
    else if (waves.current.wave_height <= 0.5) {
      return "There doesn't seem to be much surf around. It wouldn't hurt to suss your local beachie, though";
    }
  }
  // If wind speed is less than or equal to 5 knots
  else if (winds.current.wind_speed_10m <= 5) {
    // 10
    if (waves.current.wave_period > 12) {
      return "It looks like a solid groundswell in the water. Check out the surf report and know your limitations";
    }
    // 11
    else if (
      waves.current.wave_height > 0.5 &&
      waves.current.wave_period <= 6
    ) {
      return "It looks like a windswell in the water. Go check out your local but keep expectations low";
    }
    // 12
    else if (waves.current.wave_height <= 0.5) {
      return "There doesn't seem to be much surf around. It wouldn't hurt to suss your local beachie, though";
    }
    // 13
    else if (
      waves.current.wave_height >= 0.5 &&
      waves.current.wave_height <= 1.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 10
    ) {
      return "Try the open beaches";
    }
    // 14
    else if (
      waves.current.wave_height > 1.5 &&
      waves.current.wave_height <= 2.5 &&
      waves.current.wave_period >= 7 &&
      waves.current.wave_period <= 12
    ) {
      return "It's probably pumping on the open beaches. Check the tides & know your limitations. The outer points are also worth consideration";
    }
  }
  // If wave height is less than 2.5m
  if (waves.current.wave_height < 2.5) {
    // 15
    return "Experienced surfers only.";
  }
  // Default condition if none of the above conditions are met
  return "Flag it. Take your significant other out for coffee instead - or do something productive for once, you degenerate.";
}

// --------------------------------------------------- //

// ADD DATA TO HTML //
function addRecomData(waves, winds) {
  console.log('Waves:', waves);
  console.log('Winds:', winds);

  const recommendContainer = document.querySelector(".recommend-section");
  const recommend = document.createElement("p");
  recommend.textContent = recomLogic(waves, winds);
  
  console.log('Recommendation:', recommend.textContent);

  recommendContainer.appendChild(recommend);
}