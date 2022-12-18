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
var snowOpacityArr = ["lessOpacity", "moreOpacity"];
var snowFallSpeedArr = ["slow", "normal", "fast"];
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

// --------HAPPY HOLIDAYS FUNCTIONS----------
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
      }, 225)
  };

// ---------------SNOW FUNCTIONS------------
let letItSnow = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart2 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart3 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart4 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart5 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart6 = () => {
  for (let i = 0; i < 20; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart7 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart8 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart9 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart10 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart11 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart12 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart13 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart14 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart15 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart16 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart17 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart18 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart19 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart20 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

let letItSnowPart21 = () => {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 10)];
    let snowOpacity = snowOpacityArr[Math.floor(Math.random() * 2)];
    let newSnowballFallDiv = document.createElement("div");
    let newSnowballSwayDiv = document.createElement("div");
    newSnowballFallDiv.className =
      snowFallSpeedArr[Math.floor(Math.random() * 3)];
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
};

letItSnow();

setTimeout(() => {
  letItSnowPart2();
}, "500");

setTimeout(() => {
  letItSnowPart3();
}, "1000");

setTimeout(() => {
  letItSnowPart4();
}, "1500");

setTimeout(() => {
  letItSnowPart5();
}, "2000");

setTimeout(() => {
  letItSnowPart6();
}, "2500");

setTimeout(() => {
  letItSnowPart7();
}, "3000");

setTimeout(() => {
  letItSnowPart8();
}, "3000");

setTimeout(() => {
  letItSnowPart9();
}, "3500");

setTimeout(() => {
  letItSnowPart10();
}, "4000");

setTimeout(() => {
  letItSnowPart11();
}, "4500");

setTimeout(() => {
  letItSnowPart12();
}, "5000");

setTimeout(() => {
  letItSnowPart13();
}, "5500");

setTimeout(() => {
  letItSnowPart14();
}, "6000");

setTimeout(() => {
  letItSnowPart15();
}, "6500");

setTimeout(() => {
  letItSnowPart16();
}, "7000");

setTimeout(() => {
  letItSnowPart17();
}, "7500");

setTimeout(() => {
  letItSnowPart18();
}, "8000");

setTimeout(() => {
  letItSnowPart19();
}, "8500");

setTimeout(() => {
  letItSnowPart20();
}, "9000");

setTimeout(() => {
  letItSnowPart21();
}, "9500");
