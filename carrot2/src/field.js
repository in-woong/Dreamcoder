import * as Sound from "./sound.js";

export default class Field {
  constructor(carrotCount, bugCount) {
    this.CARROT_COUNT = carrotCount;
    this.BUG_COUNT = bugCount;
    this.carrotSize = 80;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }

  setItems() {
    this.field.innerHTML = "";
    this._addItem("bugImg", "./img/bug.png", this.CARROT_COUNT);
    this._addItem("carrotImg", "./img/carrot.png", this.BUG_COUNT);
  }

  setItemClick(onItemClick) {
    this.onItemClick = onItemClick;
  }
  _addItem = (className, ImgPath, count) => {
    for (let i = 1; i <= count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", ImgPath);
      item.style.position = "absolute";
      const x1 = 0;
      const y1 = 0;
      const x2 = this.fieldRect.width - this.carrotSize;
      const y2 = this.fieldRect.height - this.carrotSize;
      const y = getRandomInt(y1, y2);
      const x = getRandomInt(x1, x2);
      item.style.top = `${y}px`;
      item.style.left = `${x}px`;
      this.field.appendChild(item);
    }
  };
  onClick = (event) => {
    const target = event.target;
    if (target.matches(".carrotImg")) {
      target.remove();
      this.onItemClick && this.onItemClick("carrot");
      Sound.playBugSound();
    } else if (target.matches(".bugImg")) {
      target.remove();
      this.onItemClick && this.onItemClick("bug");
      Sound.playCarrotSound();
    }
  };
}

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min; //최댓값은 제외, 최솟값은 포함
}
