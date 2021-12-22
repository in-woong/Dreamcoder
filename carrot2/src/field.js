export default class Field {
  constructor(carrotCount, bugCount) {
    this.CARROT_COUNT = carrotCount;
    this.BUG_COUNT = bugCount;
    this.carrotSize = 80;
    this.field = document.querySelector(".game__field");
    this.fieldRect = field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }

  setItems() {
    this.field.innerHTML = "";
    this._addItem("bugImg", "./img/bug.png", CARROT_COUNT);
    this._addItem("carrotImg", "./img/carrot.png", BUG_COUNT);
  }
  _addItem = (className, ImgPath, count) => {
    for (let i = 1; i <= count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", ImgPath);
      item.style.position = "absolute";
      const x1 = 0;
      const y1 = 0;
      const x2 = this.fieldRect.width - carrotSize;
      const y2 = this.fieldRect.height - carrotSize;
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
      score++;
      target.remove();
      playSound(bugSound);
      updateScoreBoard(score);
      if (score == CARROT_COUNT) {
        playSound(winSound);
        endGame(true);
      }
    } else if (target.matches(".bugImg")) {
      target.remove();
      playSound(carrotSound);
      endGame(false);
    }
  };
}

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min; //최댓값은 제외, 최솟값은 포함
}
