const submitBtn = document.getElementById("checkBtn");
submitBtn.addEventListener("click", function checkAge(event) {
  event.preventDefault();
  const userAge = document.getElementById("ageInput").value;
  if (userAge >= 18) {
    alert("Yes, you can smoke hookah");
  } else {
    alert("You are not allowed to smoke hookah yet.");
  }
});
