import { clearTodoOnPage, loadTodoOnPage, updateTodoOnpage, } from "../dom/todo.dom.js";
import { changeStorage } from "../services/localstorage.service.js";

const generateID = (todos) => {
  if (todos == null) {
    return 1;
  }
  return todos.length + 1;
};

export const fetchTodoFromHTML = (e, todos) => {
  const title = e.target.todo_title.value;
  const description = e.target.todo_description.value;
  const genID = "todo" + generateID(todos);
  const todo = {
    id: genID,
    text: title,
    description,
    completed: false,
  };
  bootstrap.Modal.getInstance(document.getElementById("exampleModal")).hide();
  return todo;
};

export const addTodo = (e) => {
  const todos = getTodo();
  const todo = fetchTodoFromHTML(e, todos);

  if (todos == null) {
    const onlytodo = [todo];
    changeStorage(onlytodo);
    updateTodoOnpage(todo);
    document.getElementById("no-todo").style.display = "none";
    return;
  }
  todos.push(todo);
  changeStorage(todos);
  updateTodoOnpage(todo);
};

export const getTodo = () => {
  let todos = localStorage.getItem("todos");
  const todolist = JSON.parse(todos);
  if (todos == null || todolist.length == 0) {
    localStorage.setItem("todos", JSON.stringify([]));
    return null;
  }

  return todolist;
};

export const deleteTodo = () => {
  const todo_id = [];
  const todoHTML = document.getElementById("todo-list").childNodes;
  const todos = getTodo();
  todoHTML.forEach((todo) => {
    const isChecked = todo.firstChild.checked;

    if (isChecked) {
      todo_id.push(todo.id);
    }
  });

  // Remove todos whose id is in todo_id
  const updatedTodos = todos.filter((todo) => !todo_id.includes(todo.id));
  changeStorage(updatedTodos);
  clearTodoOnPage();
  loadTodoOnPage();
};
