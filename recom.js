// READ CONDITIONS AND RECOMMEND ACTIONS FOR THE USER //


// waves.current.wave_height 
// winds.current.wind_speed_10m
// winds.current.direction
// waves.current.wave_period



function recomLogic(waves, winds) {
  // 1
  if (
    winds.current.wind_speed_10m <= 5 &&
    winds.current.direction >= 270 &&
    winds.current.direction <= 360 &&
    waves.current.wave_height >= 0.5 &&
    waves.current.wave_height <= 1.5 &&
    waves.current.wave_period >= 7 &&
    waves.current.wave_period <= 10
  ) {
    return "Try the open beaches";
  }
  // 2
  else if (
    winds.current.wind_speed_10m <= 5 &&
    winds.current.direction >= 0 &&
    winds.current.direction <= 40 &&
    waves.current.wave_height >= 0.5 &&
    waves.current.wave_height <= 1.5 &&
    waves.current.wave_period >= 7 &&
    waves.current.wave_period <= 10
  ) {
    return "Seek shelter at a backbeach";
  }
  // 3
  else if (
    winds.current.wind_speed_10m <= 5 &&
    winds.current.direction >= 200 &&
    winds.current.direction <= 220 &&
    waves.current.wave_height >= 0.5 &&
    waves.current.wave_height <= 1.5 &&
    waves.current.wave_period >= 7 &&
    waves.current.wave_period <= 10
  ) {
    return "Seek shelter at a backbeach";
  }
  // 4
  else if (
    winds.current.wind_speed_10m <= 5 &&
    (winds.current.direction >= 270 &&
    winds.current.direction <= 290) ||
    
    waves.current.wave_height >= 1.5 &&
    waves.current.wave_height <= 2.5 &&
    waves.current.wave_period >= 7 &&
    waves.current.wave_period <= 10
  ) {
    return "Seek shelter at a backbeach";
  }

  {
  }
}















// --------------------------------------------------- //