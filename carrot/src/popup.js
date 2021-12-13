"use strict";

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    this.popUpRefresh.addEventListener("click", () => {
      this.OnClick && this.OnClick();
      this.hide();
    });
  }
  setClickListener(OnClick) {
    this.OnClick = OnClick;
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove("pop-up--hide");
  }

  hide() {
    console.log("hide");
    this.popUp.classList.add("pop-up--hide");
  }
}
