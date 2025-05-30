// Function to add a new task
function addTask() {
  // Get the input box and its value
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); // Remove extra spaces

  // Check if input is empty
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new <li> element
  const li = document.createElement("li");

  // Set its text content
  li.textContent = taskText;

  // Toggle 'done' class on click
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";  // Cross icon
  deleteBtn.className = "delete-btn";

  // Delete task on button click
  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering li click
    li.remove();
  });

  // Add delete button to li
  li.appendChild(deleteBtn);

  // Append li to the task list
  document.getElementById("taskList").appendChild(li);

  // Clear the input field
  taskInput.value = "";
}
