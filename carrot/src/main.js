"use strict";
import Game from "./game.js";
import PopUp from "./popup.js";

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  game.start();
});

const game = new Game(3, 2, 2);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      message = "Replay";
      break;
    case "win":
      message = "YOU WIN";
      break;
    case "lose":
      message = "YOU LOST ";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});
