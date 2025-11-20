const submitBtn = document.getElementById("checkBtn");
function calculateDifference() {
  const yourNumber = document.getElementById("numberInput").value;
  if (yourNumber - 27 > 27) {
    alert((yourNumber - 27) * 2);
  } else {
    alert(27 - yourNumber);
  }
}
submitBtn.addEventListener("click", weather);
