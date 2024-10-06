document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });
});
function addTask() {
  const taskDescription = document.getElementById("new-task-description").value;
  const taskList = document.getElementById("tasks");

  const taskItem = document.createElement("li");
  taskItem.textContent = taskDescription;

  if (priority === "high") {
    taskItem.style.color = "red";
  } else if (priority === "medium") {
    taskItem.style.color = "yellow";
  } else {
    taskItem.style.color = "green";
  }

  const dueDate = document.getElementById("due-date").value;
  taskItem.textContent = `${taskDescription} (Due: ${dueDate})`;

  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => taskItem.remove());

  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}
let tasks = [];

function addTask() {
  const taskDescription = document.getElementById("new-task-description").value;
  const priority = document.getElementById("priority").value;

  const newTask = { description: taskDescription, priority };
  tasks.push(newTask);

  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("tasks");
  taskList.innerHTML = ""; 

  tasks
    .sort((a, b) => {
      const priorities = { low: 1, medium: 2, high: 3 };
      return priorities[b.priority] - priorities[a.priority];
    })
    .forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = task.description;

      if (task.priority === "high") taskItem.style.color = "red";
      else if (task.priority === "medium") taskItem.style.color = "yellow";
      else taskItem.style.color = "green";

      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        tasks = tasks.filter((t) => t !== task);
        displayTasks();
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    });
}
const editButton = document.createElement("button");
editButton.textContent = "Edit";
editButton.addEventListener("click", () => {
  const newDescription = prompt("Edit your task:", taskDescription);
  taskItem.textContent = newDescription;
  taskItem.appendChild(deleteButton);
  taskItem.appendChild(editButton);
});
taskItem.appendChild(editButton);
taskItem.addEventListener("click", () => {
  taskItem.style.textDecoration = "line-through";
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    addTask();
  });
});
