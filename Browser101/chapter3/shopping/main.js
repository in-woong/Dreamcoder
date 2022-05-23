const listForm = document.querySelector(".listForm");
const listInput = document.querySelector(".listInput");
const items = document.querySelector(".items");

let id = 0;

function onAdd(e) {
  e.preventDefault();
  const text = listInput.value;
  if (text == "") {
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  listInput.value = "";
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-target-id", `${id}`);
  itemRow.innerHTML = `       
  <div class="item">
    <span class="item__name">${text}</span>
    <button class="trashBtn">
      <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
  </div>
  <div class="divider"></div>`;

  id++;
  return itemRow;
}

listForm.addEventListener("submit", (e) => {
  onAdd(e);
});

items.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const item = document.querySelector(`.item__row[data-target-id="${id}"]`);
    items.removeChild(item);
  }
});
