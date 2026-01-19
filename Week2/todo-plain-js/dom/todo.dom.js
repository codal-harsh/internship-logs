import { getTodo } from "../controller/todo.controller.js";

const createChildListElement = (todo) => {
  const li = document.createElement("li");
  li.classList.add(
    "border",
    "border-secondary",
    "px-3",
    "py-3",
    "rounded-3",
    "w-100",
    "d-flex",
    "align-items-center",
    "gap-3"
  );
  li.id = `${todo.id}`;
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input", "bg-secondary", "p-3");
  li.appendChild(input);
  const text = document.createElement("span");
  text.innerHTML = todo.text;
  li.appendChild(text);
  return li;
};

export const updateTodoOnpage = (todo) => {
  const todolistHTML = document.getElementById("todo-list");
  const li = createChildListElement(todo);
  todolistHTML.appendChild(li);
  return;
};

export const loadTodoOnPage = () => {
  const todolistHTML = document.getElementById("todo-list");
  const todos = getTodo();
  if (todos == null) {
    const msg = document.createElement("span");
    msg.innerText = "No Todo Created";
    msg.id = "no-todo";
    todolistHTML.appendChild(msg);
    return;
  }
  todos?.forEach((todo) => {
    const li = createChildListElement(todo);
    todolistHTML.appendChild(li);
  });
};

export const clearTodoOnPage = () => {
  const todolistHTML = document.getElementById("todo-list");
  todolistHTML.innerHTML = "";
};
