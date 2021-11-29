const listForm = document.querySelector(".listForm");
const plusBtn = document.querySelector(".plusBtn");
const trashBtn = document.querySelector(".trashBtn");
const ul = document.querySelector("ul");

listForm.addEventListener("submit", (e) => {
  addList(e);
});

trashBtn.addEventListener("click", (e) => {
  removeList(e);
});

function addList(e) {
  e.preventDefault();
  const listInput = document.querySelector(".listInput");
  const listName = document.createElement("span");
  listName.setAttribute("class", "listName");
  listName.innerText = listInput.value;
  listInput.value = "";

  const trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "trashBtn");
  trashBtn.innerText = "T";

  const list = document.createElement("li");
  list.setAttribute("class", "list");
  list.appendChild(listName);
  list.appendChild(trashBtn);

  ul.appendChild(list);
}

function removeList(e) {
  console.log(e);
  e.target.remove();
}
