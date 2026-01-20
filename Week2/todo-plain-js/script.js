import {
  addTodo,
  deleteSingleTodo,
  deleteTodo,
  editTodo,
} from "./controller/todo.controller.js";
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

const todoListHTML = document.getElementById("todo-list");

let todoToDeleteId = null;

todoListHTML.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".todo-delete-btn");
  if (!deleteBtn) return;

  const li = deleteBtn.closest("li");
  todoToDeleteId = li.id;

  const modalEl = document.getElementById("deleteModal");
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
});

// Confirm button inside modal
document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
  if (todoToDeleteId) {
    deleteSingleTodo(todoToDeleteId);
    todoToDeleteId = null;
  }

  const modalEl = document.getElementById("deleteModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
});

todoListHTML.addEventListener("click", (e) => {
  editTodo(e);
});
