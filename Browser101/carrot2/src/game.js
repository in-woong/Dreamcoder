import * as Sound from "./sound.js";
import Field from "./field.js";

export const Reason = Object.freeze({
  win: "win",
  lose: "lose",
  cancel: "cancel",
});

export default class GameBuilder {
  carrotCount(Num) {
    this.CARROT_COUNT = Num;
    return this;
  }
  bugCount(Num) {
    this.BUG_COUNT = Num;
    return this;
  }
  gameDurationSec(Num) {
    this.GAME_DURATION_SEC = Num;
    return this;
  }
  build() {
    return new Game(
      this.CARROT_COUNT, //
      this.BUG_COUNT,
      this.GAME_DURATION_SEC
    );
  }
}

class Game {
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
        this.endGame(Reason.cancel);
      }
    });
    this.timerSpan = document.querySelector(".game__timer");
    this.gameScore = document.querySelector(".game__score");
    this.icon = document.querySelector(".fas");

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setItemClick(this.onItemClick);
  }

  onItemClick = (item) => {
    if (item === "carrot") {
      this.score++;
      this.updateScoreBoard(this.score);
      if (this.score == this.CARROT_COUNT) {
        this.endGame(Reason.win);
      }
    } else if (item === "bug") {
      this.endGame(Reason.lose);
    }
  };

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

  endGame(reason) {
    this.started = false;
    if (reason === Reason.win) {
      this.onGameStop && this.onGameStop(Reason.win);
    } else if (reason === Reason.lose) {
      this.onGameStop && this.onGameStop(Reason.lose);
    } else {
      this.onGameStop && this.onGameStop(Reason.cancel);
    }
    this.hidePlayBtn();
    this.stopGameTimer();
    Sound.pauseBGSound();
    Sound.playAlertSound();
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

  startGameTimer = () => {
    let remainingTimeSec = this.GAME_DURATION_SEC;
    this.updateTimerText(remainingTimeSec);
    this.setTime = setInterval(() => {
      if (remainingTimeSec <= 0) {
        this.endGame(Reason.lose);
        clearInterval(this.setTime);
      } else {
        this.updateTimerText(--remainingTimeSec);
      }
    }, 1000);
  };

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
