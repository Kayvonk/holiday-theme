var snowDiv = document.getElementById("snow");
var envelopDiv = document.getElementById("envelop");
var greetingDiv = document.getElementById("greeting");

let envelop = document.createElement("div");

var snowSizeArr = ["small", "medium", "large"];
var snowStartingPositionArr = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
var snowOpacityArr = ["lessOpacity", "moreOpacity", "moreOpacity"];
var snowFallSpeedArr = ["slowest", "slow", "normal", "fast", "fastest"];
var snowSwayArr = ["lightLeft", "lightRight", "heavyLeft", "heavyRight"];
var envelopStatusOpened = true;
var happyHolidays = [
  "H",
  "a",
  "p",
  "p",
  "y",
  " ",
  "H",
  "o",
  "l",
  "i",
  "d",
  "a",
  "y",
  "s",
];


// -----------ENVELOP FUNCTIONS------------
let createEnvelop = () => {
  envelop.innerHTML = "O";
  envelop.className = "openedEnvelop";
  envelopDiv.appendChild(envelop);
};

let toggleEnvelop = () => {

  if (envelopStatusOpened) {
    writeText()
    envelop.innerHTML = "P";
    envelopStatusOpened = false;
  }
};

envelop.addEventListener("click", toggleEnvelop);

createEnvelop();

// --------HAPPY HOLIDAYS FUNCTION----------
let count = 0;

const writeText = () => {
  setTimeout(function () {
    let letter = document.createElement("div")
    greetingDiv.className = "HappyHolidays"
    greetingDiv.appendChild(letter)
    letter.innerHTML += happyHolidays[count]
    count += 1
    if (count < happyHolidays.length) {
      writeText();
    } else {
      return
    }
  }, 250)
};

// ---------------SNOW FUNCTION------------

let myInterval = setInterval(letItSnow, 500);

let rowCount = 0

function letItSnow() {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 3)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 5)];
    newSnowballSwayDiv.className = snowSwayArr[Math.floor(Math.random() * 4)];
    let newSnowball = document.createElement("div");
    newSnowball.className =
      "snowball" +
      " " +
      snowSize +
      " " +
      snowStartingPosition +
      " " +
      snowOpacity;
    snowDiv.appendChild(newSnowballFallDiv);
    newSnowballFallDiv.appendChild(newSnowballSwayDiv);
    newSnowballSwayDiv.appendChild(newSnowball);
  }
  rowCount += 1
  if (rowCount === 22) {
    clearInterval(myInterval)
  }
};