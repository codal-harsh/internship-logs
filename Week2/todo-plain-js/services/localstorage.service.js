export const changeStorage = (todos) =>{
    localStorage.setItem("todos",JSON.stringify(todos))
}