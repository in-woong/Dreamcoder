import * as Sound from "./sound.js";
import Field from "./field.js";

export default class Game {
  constructor(carrotCount = 10, bugCount = 10, gameDurationSec = 12) {
    this.GAME_DURATION_SEC = carrotCount;
    this.CARROT_COUNT = bugCount;
    this.BUG_COUNT = gameDurationSec;

    this.setTime;
    this.started = false;
    this.score = 0;

    this.playBtn = document.querySelector(".game__play");
    this.playBtn.addEventListener("click", () => {
      if (!this.started) {
        this.initGame();
      } else {
        this.stopGame();
      }
    });
    this.timerSpan = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");
    this.icon = document.querySelector(".fas");

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setItemClick(this.onItemClick);
  }

  onItemClick=(item)=> {
    if (item === "carrot") {
      this.score++;
      this.updateScoreBoard(this.score);
      if (this.score == this.CARROT_COUNT) {
        this.endGame(true);
      }
    } else if (item === "bug") {
      this.endGame();
    }
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  initGame() {
    this.score = 0;
    this.started = true;
    this.showStopIcon();
    this.updateScoreBoard(this.score);
    this.gameField.setItems();
    this.startGameTimer();
    this.unHidePlayBtn();
    Sound.playBGSound();
  }

  endGame(win) {
    this.started = false;
    if (win) {
      this.onGameStop && this.onGameStop("win");
    } else {
      this.onGameStop && this.onGameStop("lose");
    }
    this.hidePlayBtn();
    this.stopGameTimer();
    Sound.pauseBGSound();
    Sound.playAlertSound();
  }

  stopGame() {
    this.started = false;
    this.stopGameTimer();
    this.hidePlayBtn();
    Sound.pauseBGSound();
    this.onGameStop && this.onGameStop("cancel");
  }

  showStopIcon() {
    this.icon.classList.remove("fa-play");
    this.icon.classList.add("fa-stop");
  }
  unHidePlayBtn() {
    this.playBtn.style.visibility = "visible";
  }

  hidePlayBtn() {
    this.playBtn.style.visibility = "hidden";
  }

  startGameTimer=()=> {
    let remainingTimeSec = this.GAME_DURATION_SEC;
    this.updateTimerText(remainingTimeSec);
    this.setTime = setInterval(() => {
      if (remainingTimeSec <= 0) {
        this.endGame();
        clearInterval(this.setTime);
      } else {
        this.updateTimerText(--remainingTimeSec);
      }
    }, 1000);
  }

  stopGameTimer() {
    clearInterval(this.setTime);
  }

  updateTimerText(timer) {
    let min = Math.floor(timer / 60);
    let sec = timer % 60;
    let time = `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
    this.timerSpan.innerText = time;
  }

  updateScoreBoard(score) {
    this.gameScore.innerText = this.CARROT_COUNT - score;
  }
}
