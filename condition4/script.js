const slider = document.getElementById("AQIRange");
const aqiOutput = document.getElementById("AQIOutput");
const aqiLevel = document.getElementById("AQIlevel");
updateUI();
slider.addEventListener("input", updateUI);

function updateUI() {
  const idx = Number(slider.value);
  aqiOutput.innerText = slider;
  if (idx <= 50 && idx >= 0) {
    aqiOutput.innerText =
      "Level of health concern: Good Level of health effect: Little or no risk";
  } else if (idx <= 100 && idx >= 51) {
    aqiOutput.innerText =
      "Level of health concern: Moderate Level of health effect: Acceptable quality";
  } else if (idx <= 150 && idx >= 101) {
    aqiOutput.innerText =
      "Level of health concern: Unhealthy for sensitive groups Level of health effect: Generable publics not likely affected";
  }
  console.log(idx);
}
