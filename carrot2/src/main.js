"use strict";

import Popup from "./popup.js";
import Game from "./game.js";
const gamePopup = new Popup();
const game = new Game();

gamePopup.setClickListener(() => {
  game.initGame();
});

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "win":
      message = "YOU WIN😍";
      break;
    case "lose":
      message = "YOU LOSE FUCK🐓";
      break;
    case "cancel":
      message = "Do it Again";
      break;
    default:
      throw new Error("not valid reason");
  }
  gamePopup.showPopupWithText(message);
});
