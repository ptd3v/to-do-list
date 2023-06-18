// script.js

// This function adds a task to a to-do list
function addTask() {
  // Retrieve the task input element from the HTML
  var taskInput = document.getElementById("taskInput");

  // Get the value entered in the task input
  var task = taskInput.value;

  // Check if the task is not empty
  if (task !== "") {
    // Create a new list item element
    var listItem = document.createElement("li");

    // Create a checkbox element
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Add an event listener to the checkbox to handle task completion
    checkbox.addEventListener("change", toggleTaskCompletion);

    // Create a label element to display the task text
    var label = document.createElement("label");
    label.innerText = task;

    // Append the checkbox and label to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    // Append the list item to the to-do list
    document.getElementById("todo-list").appendChild(listItem);

    // Reset the task input value to an empty string
    taskInput.value = "";
  }
}

// This function toggles the completion status of a task
function toggleTaskCompletion(event) {
  // Get the checkbox that triggered the event
  var checkbox = event.target;

  // Get the parent list item of the checkbox
  var listItem = checkbox.parentNode;

  // If the checkbox is checked, add the "completed" class to the list item
  if (checkbox.checked) {
    listItem.classList.add("completed");
  } else {
    // If the checkbox is unchecked, remove the "completed" class from the list item
    listItem.classList.remove("completed");
  }
}