// FETCH WAVES AND WINDS FROM API //

async function getData() {
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
