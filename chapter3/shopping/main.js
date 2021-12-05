const listForm = document.querySelector(".listForm");
const plusBtn = document.querySelector(".plusBtn");
const ul = document.querySelector("ul");
const listInput = document.querySelector(".listInput");
const items = document.querySelector(".items");

listForm.addEventListener("submit", (e) => {
  onAdd(e);
});

function onAdd(e) {
  e.preventDefault();
  const text = listInput.value;
  if (text == "") {
    return;
  }
  const itemRow = createItem(text);

  items.appendChild(itemRow);
  listInput.value = "";
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const itemName = document.createElement("span");
  itemName.setAttribute("class", "item__name");
  itemName.innerText = text;

  const trashBtn = document.createElement("button");
  trashBtn.setAttribute("class", "trashBtn");
  trashBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  trashBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const divider = document.createElement("div");
  divider.setAttribute("class", "divider");

  item.appendChild(itemName);
  item.appendChild(trashBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(divider);

  return itemRow;
}
