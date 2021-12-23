"use strict";

import Popup from "./popup.js";
import Field from "./field.js";
import * as Sound from "./sound.js";
const gamePopup = new Popup();
const gameField = new Field(5, 5);

const playBtn = document.querySelector(".game__play");
const timerSpan = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");
const icon = document.querySelector(".fas");

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
  gameField.setItems();
  startGameTimer();
  unHidePlayBtn();
  Sound.playBGSound();
}

function endGame(win) {
  started = false;
  if (win) {
    gamePopup.showPopupWithText("YOU WIN😍");
  } else {
    gamePopup.showPopupWithText("YOU LOSE FUCK🐓");
  }
  hidePlayBtn();
  stopGameTimer();
  Sound.pauseBGSound();
  Sound.playAlertSound();
}

function stopGame() {
  started = false;
  stopGameTimer();
  gamePopup.showPopupWithText("YOU LOSE");
  hidePlayBtn();
  Sound.pauseBGSound();
}

gameField.setItemClick(onItemClick);

function onItemClick(item) {
  if (item === "carrot") {
    score++;
    updateScoreBoard(score);
    if (score == CARROT_COUNT) {
      endGame(true);
    }
  } else if (item === "bug") {
    endGame();
  }
}

playBtn.addEventListener("click", () => {
  if (!started) {
    initGame();
  } else {
    stopGame();
  }
});

gamePopup.setClickListener(() => {
  initGame();
  unHidePlayBtn();
});

//2. 게임시작하기

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

function updateScoreBoard(score) {
  gameScore.innerText = CARROT_COUNT - score;
}
//5. 게임 마무리하기
