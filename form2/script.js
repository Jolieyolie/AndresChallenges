function showAge() {
  const bYear = parseInt(document.getElementById("birthYear").value);
  const currentYear = new Date().getFullYear();
  console.log(currentYear - bYear);
}
