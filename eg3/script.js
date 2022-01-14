const button = document.querySelector("button");
const body = document.querySelector("body");

body.style.backgroundColor = "teal";

var colors = [
  "blue",
  "wheat",
  "gray",
  "seagreen",
  "green",
  "red",
  "aqua",
  "yellow",
  "orange",
];

function changeBackground() {
  var colorIndex = Math.floor(Math.random() * 10 + 1);
  body.style.backgroundColor = colors[colorIndex];
}
