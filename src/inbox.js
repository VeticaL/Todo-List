function createTask() {
  const tasks = document.querySelector(".main");
  const items = document.createElement("p");
  const remove = document.createElement("button");
  remove.classList.add("delBtn");
  remove.textContent = "X";
  items.classList.add("items");
  items.textContent = document.querySelector(".text").value;
  tasks.appendChild(items);
  items.appendChild(remove);
}

function del() {
  const item = document.querySelector(".items");
  item.remove();
}

export { createTask, del };
