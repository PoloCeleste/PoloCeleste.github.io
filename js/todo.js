const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY ="todo";
const savedTodos = localStorage.getItem(TODOS_KEY);

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function doneTodo(event){
    const li = event.target.parentElement;
    const target = li.querySelector("span");
    target.classList.toggle('done');
    console.log(todos);
    console.log(li);
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = `${newTodo.text} `;
    const button1 = document.createElement("button");
    button1.innerText = "V";
    button1.style.color = "lightgreen";
    button1.addEventListener("click", doneTodo);
    const button2 = document.createElement("button");
    button2.innerText = "X";
    button2.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button2);
    li.appendChild(button1);
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    const doneTodo = false;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        done: doneTodo,
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

if (savedTodos !== null) {
    const lastTodos = JSON.parse(savedTodos);
    todos = lastTodos;
    lastTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);
