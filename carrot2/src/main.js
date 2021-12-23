"use strict";

import Popup from "./popup.js";
import GameBuilder, { Reason } from "./game.js";
const gamePopup = new Popup();
const game = new GameBuilder()
  .carrotCount(5)
  .bugCount(5)
  .gameDurationSec(3)
  .build();

gamePopup.setClickListener(() => {
  game.initGame();
});

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.win:
      message = "YOU WIN😍";
      break;
    case Reason.lose:
      message = "YOU LOSE FUCK🐓";
      break;
    case Reason.cancel:
      message = "Do it Again";
      break;
    default:
      throw new Error("not valid reason");
  }
  gamePopup.showPopupWithText(message);
});
