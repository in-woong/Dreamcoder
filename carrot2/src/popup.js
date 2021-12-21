export default class Popup {
  constructor() {
    this.popup = document.querySelector(".pop-up");
    this.popupMesg = document.querySelector(".popup__messg");
    this.popupReplay = document.querySelector(".pop-up__replay");
    this.popupReplay.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  showPopupWithText(text) {
    this.popup.classList.remove("hidden");
    this.popupMesg.innerText = text;
  }

  hide() {
    this.popup.classList.add("hidden");
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }
}
