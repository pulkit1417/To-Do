const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoItem = document.createElement("li");
    const todoSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const completeBtn = document.createElement("button2");

    todoSpan.textContent = todoText;
    deleteBtn.textContent = "Delete";
    completeBtn.textContent = "✓";

    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(todoItem);
    });

    completeBtn.addEventListener("click", () => {
      todoItem.classList.toggle("completed");
      todoItem.classList.toggle("done");
    });

    todoItem.appendChild(completeBtn);
    todoItem.appendChild(todoSpan);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);

    todoInput.value = "";
  }
}
