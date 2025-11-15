const submitBtn = document.getElementById("submitBtn");
function compareAge() {
  const ageInput1 = document.getElementById("age1").value;
  const ageInput2 = document.getElementById("age2").value;
  const nameInput1 = document.getElementById("name1");
  const nameInput2 = document.getElementById("name2");

  if (ageInput1 > ageInput2) {
    alert(nameInput1.value + " is older than " + nameInput2.value);
  } else if (ageInput1 < ageInput2) {
    alert(nameInput2.value + " is older than " + nameInput1.value);
  } else {
    alert(
      nameInput1.value + " and " + nameInput2.value + " are of the same age."
    );
  }
}
