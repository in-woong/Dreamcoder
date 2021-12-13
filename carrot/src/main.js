"use strict";
import Game, { GameBuilder } from "./game.js";
import PopUp from "./popup.js";

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
