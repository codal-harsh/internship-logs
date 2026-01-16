import { updateTodoOnpage } from "../dom/todo.dom.js";
import { changeStorage } from "../services/localstorage.service.js";

export const addTodo = (todo) => {
  const todos = getTodo();
  const newTodoList = [...todos, todo];
  console.log(newTodoList);
  changeStorage(newTodoList);
  updateTodoOnpage(todo);
};

export const getTodo = () => {
  const todolist = JSON.parse(localStorage.getItem("todos"));
  console.log(todolist);
  return todolist;
};

export const deleteTodo = (todo_id) => {
  // TODO: Delete logic
};
