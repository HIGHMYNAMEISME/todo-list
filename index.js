const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todo = document.querySelector(".todo");
const done = document.querySelector(".done");
const doneButton = document.querySelector(".done-button");
let todoCount = 0;
let doneCount = 0;

todoButton.addEventListener("click", function() {
  if (todoInput.value === "") {
    alert("Please enter a todo item.");
  }
  else {
    addTodo(todoInput.value);
    todoInput.value = "";
  }
});

function addTodo(value) {
  const todoLi = document.createElement("li");
  const todoCase = document.createElement("div");
  const doneButton = document.createElement("button");
  todoCase.classList.add("todo-case");
  todoLi.appendChild(todoCase);
  todoCase.innerHTML = value;
  todo.appendChild(todoLi);
  doneButton.innerHTML = "Done";
  doneButton.classList.add("done-button");
  todoCase.appendChild(doneButton);
  doneButton.addEventListener("click", function() {
    moveToDone(this.parentElement.parentElement);
    todoCount--; 
    resetBox(todoCount, document.querySelector(".todo-box"));
  });
  todoCount++;
  expandBox(todoCount, document.querySelector(".todo-box"));
}

function moveToDone(li) {
  const removeButton = document.createElement("button");
  li.querySelector(".todo-case").removeChild(li.querySelector(".todo-case").querySelector(".done-button"));
  done.appendChild(li);
  removeButton.innerHTML = "Remove";
  removeButton.classList.add("remove-button");
  li.querySelector(".todo-case").appendChild(removeButton);
  removeButton.addEventListener("click", function() {
    li.remove();
    doneCount--;
    resetBox(doneCount, document.querySelector(".done-box"));
  });
  doneCount++;
  expandBox(doneCount, document.querySelector(".done-box"));
}

function expandBox(count, box) {
  if (count > 7) {
    box.style.height = (250 + (count - 7) * 28) + "px";
  }
}

function resetBox(count, box) {
  if (count <= 7) {
    box.style.height = "250px";
  }
  else {
    box.style.height = (250 + (count - 7) * 28) + "px";
  }
}