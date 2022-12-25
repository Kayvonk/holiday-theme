var snowDiv = document.getElementById("snow");
var envelopDiv = document.getElementById("envelop");
var musicDiv = document.getElementById("music");
var musicOptions = document.getElementById("musicOptions");
var greetingDiv = document.getElementById("greeting");
var nowPlaying = document.getElementById("nowPlaying");

let envelop = document.createElement("div");
let musicBox = document.createElement("div");

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
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var snowOpacityArr = ["lessOpacity", "moreOpacity", "moreOpacity"];
var snowFallSpeedArr = ["slowest", "slow", "normal", "fast", "fastest"];
var snowSwayArr = ["lightLeft", "lightRight", "heavyLeft", "heavyRight"];
var envelopStatusOpened = false;
var musicStatusOn = false;
var musicNoteToggleStatus = false;
var songPaused = false;
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

let musicArray = [
  {
    name: "Dee Yan-Key- We Wish You A Merry Christmas",
    song: "./assets/music/DeeYan-Key-WeWishYouAMerryChristmas.mp3",
    duration: "63000",
  },
  {
    name: "Maya Solovéy- Little Drummer Boy",
    song: "./assets/music/MayaSolovéy-LittleDrummerBoy.mp3",
    duration: "146000",
  },
  {
    name: "Scott Holmes Music- Silent Night",
    song: "./assets/music/ScottHolmesMusic-SilentNight.mp3",
    duration: "148000",
  },
  {
    name: "Roslyn- O Holy Night",
    song: "./assets/music/Roslyn-OHolyNight.mp3",
    duration: "264000",
  },
  {
    name: "Snowy O. McSnowerson and the Oh So Snowly Snowers - Feliz Navidad",
    song: "./assets/music/SnowyOMcSnowersonandtheOhSoSnowlySnowers-FelizNavidad.mp3",
    duration: "190000",
  },
];

// -----------ENVELOP FUNCTION------------

let createEnvelop = () => {
  envelop.innerHTML = "O";
  envelopDiv.append(envelop);
};

createEnvelop();

// ---------MUSIC FUNCTIONS-----------

let createMusicDivs = () => {
  musicBox.innerHTML = ";";
  musicDiv.append(musicBox);
  let playBtn = document.createElement("div");
  playBtn.className = "playBtn";
  playBtn.innerHTML = "b";
  let pauseBtn = document.createElement("div");
  pauseBtn.className = "pauseBtn";
  pauseBtn.innerHTML = "c";
  let previousSongBtn = document.createElement("div");
  previousSongBtn.className = "previousSongBtn";
  previousSongBtn.innerHTML = "f";
  let nextSongBtn = document.createElement("div");
  nextSongBtn.className = "nextSongBtn";
  nextSongBtn.innerHTML = "g";
  let songDetails = document.createElement("div");
  songDetails.className = "songDetails";
  songDetails.setAttribute("style", "display:none");
  let songNameDiv = document.createElement("pre");
  songNameDiv.className = "songName";
  musicOptions.setAttribute("style", "display:none");
  musicOptions.append(previousSongBtn);
  musicOptions.append(playBtn);
  musicOptions.append(pauseBtn);
  musicOptions.append(nextSongBtn);
  nowPlaying.append(songDetails);
  songDetails.append(songNameDiv);
};

createMusicDivs();

const musicNoteToggle = () => {
  if (!musicNoteToggleStatus && !musicStatusOn) {
    musicNoteToggleStatus = true;
    musicStatusOn = true;
    toggleMusic();
    document
      .querySelector(".songDetails")
      .setAttribute("style", "display:flex");
  } else if (musicNoteToggleStatus) {
    musicNoteToggleStatus = false;
    musicStatusOn = false;
    clearTimeout(timer);
    audio.pause();
    musicOptions.setAttribute("style", "display:none");
    document
      .querySelector(".songDetails")
      .setAttribute("style", "display:none");
  }
};

let musicCount = 0;

var audio = new Audio(musicArray[musicCount].song);
let duration = musicArray[musicCount].duration;

let toggleMusic = () => {
  if (musicNoteToggleStatus) {
    if (musicCount < 5) {
      audio = new Audio(musicArray[musicCount].song);
      duration = musicArray[musicCount].duration;
      console.log("Song playing: " + musicArray[musicCount].name);
      audio.play();
      let songName = musicArray[musicCount].name
      let textCorrectionAmount = 40 - musicArray[musicCount].name.length
      if(textCorrectionAmount > 0) {
        songName = ' '.repeat(textCorrectionAmount) + musicArray[musicCount].name
      }
      document.querySelector(".songName").textContent = songName;
      musicOptions.setAttribute("style", "display:flex");
      timer = setTimeout(() => {
        musicCount += 1;
        if (musicNoteToggleStatus && musicStatusOn && !songPaused) {
          toggleMusic();
        }
      }, duration);
    } else {
      return;
    }
  } else if (!musicNoteToggleStatus || !musicStatusOn) {
    audio.pause();
    musicOptions.setAttribute("style", "display:none");
    return;
  }
};

let pausedTimerAdjuster = () => {
  duration = musicArray[musicCount].duration - audio.currentTime * 1000;
  let timeRemaining = duration / 1000;
  console.log("Time remaining: " + timeRemaining.toFixed() + "s");
  timer = setTimeout(() => {
    musicCount += 1;
    if (musicNoteToggleStatus && musicStatusOn && !songPaused) {
      toggleMusic();
    }
  }, duration);
};

document.addEventListener("click", function (e) {
  const target = e.target.closest(".playBtn");
  if (target) {
    if (songPaused) {
      songPaused = false;
      musicStatusOn = true;
      audio.play();
      pausedTimerAdjuster();
    }
  }
});

document.addEventListener("click", function (e) {
  const target = e.target.closest(".pauseBtn");
  if (target) {
    clearTimeout(timer);
    songPaused = true;
    musicStatusOn = false;
    audio.pause();
  }
});

document.addEventListener("click", function (e) {
  const target = e.target.closest(".previousSongBtn");
  if (target) {
    audio.pause();
    clearTimeout(timer);
    musicStatusOn = true;
    if (musicCount > 0) {
      musicCount--;
    }
    toggleMusic();
  }
});

document.addEventListener("click", function (e) {
  const target = e.target.closest(".nextSongBtn");
  if (target) {
    audio.pause();
    clearTimeout(timer);
    musicStatusOn = true;
    if (musicCount < 4) {
      musicCount += 1;
    }
    toggleMusic();
  }
});

musicBox.addEventListener("click", musicNoteToggle);

// --------HAPPY HOLIDAYS FUNCTIONS----------

let typing = false;
let addCount = 0;
let removeCount = 13;

const toggleTyping = () => {
  if (typing === false) {
    typing = !typing;
    if (!envelopStatusOpened) {
      writeText();
      envelop.innerHTML = "P";
      envelopStatusOpened = true;
    } else if (envelopStatusOpened) {
      removeText();
      envelop.innerHTML = "O";
      envelopStatusOpened = false;
    }
    setTimeout(function () {
      typing = !typing;
    }, 3500);
  }
};

const writeText = () => {
  setTimeout(function () {
    let letter = document.createElement("div");
    letter.className = "letter" + addCount;
    greetingDiv.className = "HappyHolidays";
    greetingDiv.appendChild(letter);
    letter.innerHTML += happyHolidays[addCount];
    addCount += 1;
    if (addCount < happyHolidays.length) {
      writeText();
    } else {
      addCount = 0;
    }
  }, 250);
};

const removeText = () => {
  let letter = document.querySelector(".letter" + removeCount);
  letter.classList.add("fadeOut");
  setTimeout(function () {
    letter.remove();
    removeCount--;
    if (removeCount > -1) {
      removeText();
    } else {
      removeCount = 13;
    }
  }, 250);
};

envelop.addEventListener("click", toggleTyping);

// ---------------SNOW FUNCTION------------
let myInterval = setInterval(letItSnow, 500);

let rowCount = 0;

function letItSnow() {
  for (let i = 0; i < 15; i++) {
    let snowSize = snowSizeArr[Math.floor(Math.random() * 3)];
    let snowStartingPosition =
      snowStartingPositionArr[Math.floor(Math.random() * 20)];
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
  rowCount += 1;
  if (rowCount === 22) {
    clearInterval(myInterval);
  }
}
