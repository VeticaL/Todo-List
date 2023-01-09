function createTask() {
  const tasks = document.querySelector(".main");
  const items = document.createElement("p");
  items.classList.add("items");
  items.textContent = document.querySelector(".text").value;
  tasks.appendChild(items);
}

export { createTask };
