const targetImg = document.getElementById("target");
const result = document.getElementById("result");
const hLine = document.getElementById("horizontal");
const vLine = document.getElementById("vertical");

document.addEventListener("mousemove", (e) => {
  resultFun(e);
});

const resultFun = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const xY = `${x}px ${y}px`
  targetImg.style.left = `${x}px`;
  targetImg.style.top = `${y}px`;

  result.innerHTML = xY;
  result.style.left = `${x}px`;
  result.style.top = `${y}px`;

  hLine.style.top = `${y}px`;
  vLine.style.left = `${x}px`;
};
