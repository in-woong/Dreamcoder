const targetImg = document.getElementById("target");
const targetRec =targetImg.getBoundingClientRect();
const targetWidth=targetRec.width/2;
const targetHeight=targetRec.height/2;
const result = document.getElementById("result");
const hLine = document.getElementById("horizontal");
const vLine = document.getElementById("vertical");

document.addEventListener("mousemove", (e) => {
  resultFun(e);
});

const resultFun = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const xY = `${x}px ${y}px`;
  targetImg.style.transform = `translate(${x-targetWidth}px, ${y-targetHeight}px)`;

  result.innerHTML = xY;
  result.style.transform = `translate(${x}px, ${y}px)`;

  hLine.style.transform = `translateY(${y}px)`;
  vLine.style.transform = `translateX(${x}px)`;
};
