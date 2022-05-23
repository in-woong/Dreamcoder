"use strict";

import * as Sound from "./sound.js";
export const ItemType = Object.freeze({
  carrot: "carrot",
  bug: "bug",
});
export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotSize = 80;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }

  init() {
    this.field.innerHTML = "";
    this._addItem(ItemType.carrot, this.carrotCount, "img/carrot.png");
    this._addItem("bug", this.bugCount, "img/bug.png");
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - this.carrotSize;
    const y2 = this.fieldRect.height - this.carrotSize;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  onClick = (event) => {
    const target = event.target;
    if (target.matches(".carrot")) {
      target.remove();
      Sound.playCarrot();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches(".bug")) {
      target.remove();
      Sound.playBug();
      this.onItemClick && this.onItemClick(ItemType.bug);
    }
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
