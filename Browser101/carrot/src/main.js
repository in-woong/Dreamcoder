"use strict";
import { GameBuilder, Reason } from "./game.js";
import PopUp from "./popup.js";
import * as Sound from "./sound.js";

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(5)
  .carrotcount(3)
  .bugCount(3)
  .build();

gameFinishBanner.setClickListener(() => {
  game.start();
});

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay";
      Sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WIN";
      Sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST ";
      Sound.playBug();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});
