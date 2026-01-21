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
    "gap-3",
    "position-relative"
  );
  li.id = `${todo.id}`;
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input", "bg-secondary", "p-3", "todo-checkbox");
  li.appendChild(input);
  const text = document.createElement("span");
  text.classList.add("border-0");
  text.innerHTML = todo.text;
  if(todo.completed){
    text.classList.add("text-decoration-line-through");
    input.checked = true;
  }
  li.appendChild(text);

  const actions = document.createElement("div");
  actions.classList.add(
    "position-absolute",
    "end-0",
    "p-3",
    "d-flex",
    "gap-3",
    "fs-4"
  );
  const editbtn = document.createElement("button");
  const editicon = document.createElement("i");
  editbtn.classList.add("bg-transparent", "border-0", "todo-edit-btn");
  editicon.classList.add("ri-edit-2-line");
  editbtn.appendChild(editicon);
  editbtn.id = `edit-btn-${todo.id}`;
  editicon.dataset.id = todo.id;

  const deletebtn = document.createElement("button");
  const deleteicon = document.createElement("i");
  deletebtn.classList.add("bg-transparent", "border-0", "todo-delete-btn");
  deleteicon.classList.add("ri-delete-bin-4-line");
  deletebtn.appendChild(deleteicon);
  deletebtn.id = `delete-btn-${todo.id}`;

  actions.appendChild(editbtn);
  actions.appendChild(deletebtn);

  li.appendChild(actions);
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
