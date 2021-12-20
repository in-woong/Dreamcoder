"use strict";
// 게임 필드 만들기(bug, carrot 랜덤배치)
const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();

const playBtn = document.querySelector(".game__play");

const carrotSize = 80;
const Num = 10;

playBtn.addEventListener("click", () => {
  addItem("bugImg", "./img/bug.png", Num);
  addItem("carrotImg", "./img/carrot.png", Num);
});

const addItem = (className, ImgPath, count) => {
  for (let i = 1; i <= count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", ImgPath);
    item.style.position = "absolute";
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - carrotSize;
    const y2 = fieldRect.height - carrotSize;
    const y = getRandomInt(y1, y2);
    const x = getRandomInt(x1, x2);
    item.style.top = `${y}px`;
    item.style.left = `${x}px`;
    console.log(x, y);
    field.appendChild(item);
  }
};
function getRandomInt(min, max) {
  return Math.random() * (max - min) + min; //최댓값은 제외, 최솟값은 포함
}
//2. 게임시작하기

//3. 타이머 만들기

//4. 게임 정지하기

//5. 게임 마무리하기