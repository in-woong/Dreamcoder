const bugSound = new Audio("./sound/bug_pull.mp3");
const carrotSound = new Audio("./sound/carrot_pull.mp3");
const bgSound = new Audio("./sound/bg.mp3");
const winSound = new Audio("./sound/gmae_win.mp3");
const alertSound = new Audio("./sound/alert.wav");

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
function pauseSound(sound) {
  sound.pause();
}

export function playBugSound() {
  playSound(carrotSound);
}

export function pauseBugSound() {
  pauseSound(carrotSound);
}

export function playCarrotSound() {
  playSound(bugSound);
}

export function pauseCarrotSound() {
  pauseSound(bugSound);
}

export function playBGSound() {
  playSound(bgSound);
}

export function pauseBGSound() {
  pauseSound(bgSound);
}

export function playWinSound() {
  playSound(winSound);
}

export function pauseWinSound() {
  pauseSound(winSound);
}

export function playAlertSound() {
  playSound(alertSound);
}

export function pauseAlertSound() {
  pauseSound(alertSound);
}
