const submitBtn = document.getElementById("checkBtn");
function weather() {
  const weatherToday = document.getElementById("weatherInput").value;
  if (weatherToday >= 8 && weatherToday <= 10) {
    alert("Today's weather is great.");
  } else if (weatherToday >= 6 && weatherToday <= 7) {
    alert("Today's weather is good.");
  } else if (weatherToday >= 3 && weatherToday <= 5) {
    alert("Today's weather is okay.");
  } else if (weatherToday >= 0 && weatherToday <= 2) {
    alert("Today's weather is poor.");
  } else {
    alert("Please enter a valid number between 0 and 10.");
  }
}
submitBtn.addEventListener("click", weather);
