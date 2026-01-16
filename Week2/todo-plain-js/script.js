import { addTodo } from "./controller/todo.controller.js";
import { updateDateOnPage } from "./dom/date.dom.js";
import { updateQuoteOnPage } from "./dom/quote.dom.js";
import { loadTodoOnPage, updateTodoOnpage } from "./dom/todo.dom.js";

window.addEventListener("load", async () => {
  updateQuoteOnPage();
  updateDateOnPage();
  loadTodoOnPage();
});

document.getElementById("add").addEventListener("click", () => {
  addTodo({
    id: 2,
    text: "Second Todo",
    description: "Learn javascript in deep",
    completed: false,
  });
});

