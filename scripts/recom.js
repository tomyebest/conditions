// READ CONDITIONS AND RECOMMEND ACTIONS FOR THE USER //

// waves.current.wave_height
// winds.current.wind_speed_10m
// winds.current.direction
// waves.current.wave_period

function recomLogic(waves, winds) {
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

  recommendContainer.appendChild(recommend);
}