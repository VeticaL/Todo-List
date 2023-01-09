import { createTask } from "./inbox";

const add = document.querySelector(".add");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");

add.addEventListener("click", function () {
  input.style.display = "flex";
});

submit.addEventListener("click", function () {
  createTask();
});
