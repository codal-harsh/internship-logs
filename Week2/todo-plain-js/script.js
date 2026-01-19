import { addTodo, deleteTodo } from "./controller/todo.controller.js";
import { updateDateOnPage } from "./dom/date.dom.js";
import { updateQuoteOnPage } from "./dom/quote.dom.js";
import { loadTodoOnPage } from "./dom/todo.dom.js";

window.addEventListener("load", async () => {
  updateQuoteOnPage();
  updateDateOnPage();
  loadTodoOnPage();
});

document.getElementById("todo-add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(e);
});

document.getElementById("delete-todo").addEventListener("click", (e) => {
  e.preventDefault();
  deleteTodo(e);
});
