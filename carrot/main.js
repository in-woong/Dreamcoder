const timer = document.querySelector(".timer");
const playBtn = document.querySelector(".playBtn");
const alertDiv = document.querySelector(".alert");
const replayBtn = document.querySelector(".replayBtn");
const carrotImgs = document.querySelectorAll(".carrotImg");
const bugImgs = document.querySelectorAll(".bugImg");
const carrotImg = document.querySelector(".carrotImg");
const bugImg = document.querySelector(".bugImg");

const SET_TIME = 10;
let intervalID;
let TIME;
let toggle = 1;

function updateTimer() {
  if (TIME <= 1) {
    hiddenPlayBtn();
    hiddenAlertDiv();
    TIME = 0;
    timer.innerText = setTime(TIME);
    clearInterval(intervalID);
    return;
  }
  TIME--;
  timer.innerText = setTime(TIME);
}

function setTime(TIME) {
  const min = TIME >= 60 ? Math.floor(TIME / 60) : 0;
  const sec = TIME >= 60 ? TIME - 60 * min : TIME;
  const setTime = `${min < 10 ? `0${min}` : `${min}`} : ${
    sec < 10 ? `0${sec}` : `${sec}`
  }`;
  return setTime;
}

function hiddenPlayBtn() {
  playBtn.removeAttribute("class", "hidden");
  playBtn.setAttribute("class", "playBtn");
}

function hiddenAlertDiv() {
  alertDiv.removeAttribute("class", "hidden");
  alertDiv.setAttribute("class", "alert");
}

function showImg() {
  carrotImgs.forEach((img) => {
    img.removeAttribute("class", "hidden");
    img.setAttribute("class", "carrotImg");
  });
  bugImgs.forEach((img) => {
    img.removeAttribute("class", "hidden");
    img.setAttribute("class", "bugImg");
  });
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function randomImg() {
  carrotImgs.forEach((img) => {
    const top = getRandomInt(10, 90);
    const left = getRandomInt(10, 90);
    img.style.top = `${top}%`;
    img.style.left = `${left}%`;
  });
  bugImgs.forEach((img) => {
    const top = getRandomInt(10, 90);
    const left = getRandomInt(10, 90);
    img.style.top = `${top}%`;
    img.style.left = `${left}%`;
  });
}

playBtn.addEventListener("click", () => {
  randomImg();
  showImg();
  TIME = SET_TIME;
  intervalID = setInterval(updateTimer, 1000);
  playBtn.setAttribute("class", "hidden");
});

replayBtn.addEventListener("click", () => {
  TIME = SET_TIME;
  hiddenPlayBtn();
  alertDiv.setAttribute("class", "hidden");
});

bugImg.addEventListener("click", () => {
  console.log("bugs");
});

//현재 문제점
//1.bug와 당근 이미지가 클릭이 안됨
//2.소리가 하나도 안들어 있음
//3. 클릭할때 숫자가 줄어드는 로직이 들어가 있지 않음
