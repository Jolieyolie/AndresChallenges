const submitBtn = document.getElementById("checkBtn");
function checkAge() {
  const userAge = document.getElementById("ageInput").value;
  if (userAge >= 18) {
    alert("You are an adult.");
  } else {
    alert("You are a minor.");
  }
}
