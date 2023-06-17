// script.js
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var task = taskInput.value;

  if (task !== "") {
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTaskCompletion);

    var label = document.createElement("label");
    label.innerText = task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    document.getElementById("todo-list").appendChild(listItem);

    taskInput.value = "";
  }
}

function toggleTaskCompletion(event) {
  var checkbox = event.target;
  var listItem = checkbox.parentNode;

  if (checkbox.checked) {
    listItem.classList.add("completed");
  } else {
    listItem.classList.remove("completed");
  }
}