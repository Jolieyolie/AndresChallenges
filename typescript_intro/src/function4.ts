// - Learning objective: After completing this exercise, you will be able to change the design of a website with JavaScript and write your own functions for interactive elements.
// - Create four "MagicBalls".
// - Clicking on a MagicBall changes the background color of the <body> and the text color of the <h1>.
// - Use CSS to style the elements. Either use linear-gradient or address each semicircle yourself.
// - Then define the functionality in your JS, i.e., write a separate function for each MagicBall.

// # Note

// - More information about the [onclick event](https://www.w3schools.com/jsref/event%5Fonclick.asp)
// - [Here](https://www.w3schools.com/js/js%5Fhtmldom%5Fcss.asp) you will find information about how to change the DOM with JavaScript
// - If you want some information about the transform property, click [here](https://www.w3schools.com/cssref/css3%5Fpr%5Ftransform.asp)
// - Examples and explanations of the border-radius property can be found [here](https://www.w3schools.com/cssref/css3%5Fpr%5Fborder-radius.asp)
// - Gradients can be used to create gradients. Take a look at a few examples [here](https://www.w3schools.com/css/css3%5Fgradients.asp).

const title = document.getElementById("h2") as HTMLHeadingElement;
const body = document.body as HTMLBodyElement;
const purple_green_ball = document.getElementById(
  "magic_ball_1"
) as HTMLDivElement;
const brown_gray_ball = document.getElementById(
  "magic_ball_2"
) as HTMLDivElement;
const orange_black_ball = document.getElementById(
  "magic_ball_3"
) as HTMLDivElement;
const light_dark_blue_ball = document.getElementById(
  "magic_ball_4"
) as HTMLDivElement;

purple_green_ball.addEventListener("click", () => {
  title.style.color = "purple";
  body.style.backgroundColor = "green";
});

brown_gray_ball.addEventListener("click", () => {
  title.style.color = "brown";
  body.style.backgroundColor = "gray";
});
orange_black_ball.addEventListener("click", () => {
  title.style.color = "orange";
  body.style.backgroundColor = "black";
});
light_dark_blue_ball.addEventListener("click", () => {
  title.style.color = "lightblue";
  body.style.backgroundColor = "darkblue";
});
