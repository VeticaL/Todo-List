import { createTask, del } from "./inbox";

const add = document.querySelector(".add");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");

add.addEventListener("click", function () {
  input.style.display = "flex";
});

submit.addEventListener("click", function () {
  createTask();

  const delBtn = document.querySelector(".delBtn");
  delBtn.addEventListener("click", function () {
    del();
  });
});

// todo
// make it submit while enter , input stylilng, edit, delete functioins.
