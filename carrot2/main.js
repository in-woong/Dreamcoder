"use strict";

const bugSound = new Audio("./sound/bug_pull.mp3");
const carrotSound = new Audio("./sound/carrot_pull.mp3");
const bgSound = new Audio("./sound/bg.mp3");
const winSound = new Audio("./sound/gmae_win.mp3");
const alertSound = new Audio("./sound/alert.wav");

const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

const playBtn = document.querySelector(".game__play");
const timerSpan = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");
const icon = document.querySelector(".fas");

const popup = document.querySelector(".pop-up");
const popupMesg = document.querySelector(".popup__messg");
const popupReplay = document.querySelector(".pop-up__replay");

const carrotSize = 80;
const GAME_DURATION_SEC = 10;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;

let setTime;
let started = false;
let score = 0;

function initGame() {
  score = 0;
  started = true;
  showStopIcon();
  updateScoreBoard(score);
  field.innerHTML = "";
  addItem("bugImg", "./img/bug.png", CARROT_COUNT);
  addItem("carrotImg", "./img/carrot.png", BUG_COUNT);
  startGameTimer();
  playSound(bgSound);
}

function endGame(win) {
  started = false;
  if (win) {
    showPopupWithText("YOU WIN😍");
  } else {
    showPopupWithText("YOU LOSE FUCK🐓");
  }
  hidePlayBtn();
  stopGameTimer();
  pauseSound(bgSound);
  playSound(alertSound);
}

function stopGame() {
  started = false;
  stopGameTimer();
  showPopupWithText("YOU LOSE");
  hidePlayBtn();
  pauseSound(bgSound);
}

playBtn.addEventListener("click", () => {
  if (!started) {
    initGame();
  } else {
    stopGame();
  }
});

popupReplay.addEventListener("click", () => {
  initGame();
  unHidePlayBtn();
  hidePopUp();
});

const addItem = (className, ImgPath, count) => {
  for (let i = 1; i <= count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", ImgPath);
    item.style.position = "absolute";
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - carrotSize;
    const y2 = fieldRect.height - carrotSize;
    const y = getRandomInt(y1, y2);
    const x = getRandomInt(x1, x2);
    item.style.top = `${y}px`;
    item.style.left = `${x}px`;
    field.appendChild(item);
  }
};
function getRandomInt(min, max) {
  return Math.random() * (max - min) + min; //최댓값은 제외, 최솟값은 포함
}
//2. 게임시작하기
function showPlayIcon() {
  icon.classList.remove("fa-stop");
  icon.classList.add("fa-play");
}

function showStopIcon() {
  icon.classList.remove("fa-play");
  icon.classList.add("fa-stop");
}
function unHidePlayBtn() {
  playBtn.style.visibility = "visible";
}

function hidePlayBtn() {
  playBtn.style.visibility = "hidden";
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  setTime = setInterval(() => {
    if (remainingTimeSec <= 0) {
      endGame();
      clearInterval(setTime);
    } else {
      updateTimerText(--remainingTimeSec);
    }
  }, 1000);
}

function stopGameTimer() {
  clearInterval(setTime);
}

function updateTimerText(timer) {
  let min = Math.floor(timer / 60);
  let sec = timer % 60;
  let time = `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
  timerSpan.innerText = time;
}
function showPopupWithText(text) {
  popup.classList.remove("hidden");
  popupMesg.innerText = text;
}

function hidePopUp() {
  popup.classList.add("hidden");
}
//4. 게임 정지하기

field.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches(".carrotImg")) {
    score++;
    target.remove();
    playSound(bugSound);
    updateScoreBoard(score);
    if (score == CARROT_COUNT) {
      endGame(true);
    }
  } else if (target.matches(".bugImg")) {
    target.remove();
    playSound(carrotSound);
    endGame(false);
  }
});

function updateScoreBoard(score) {
  gameScore.innerText = CARROT_COUNT - score;
}
//5. 게임 마무리하기

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function pauseSound(sound) {
  sound.pause();
}
