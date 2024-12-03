// Select the list element and button
const challengeList = document.getElementById("challengeList");
const saveProgressBtn = document.getElementById("saveProgressBtn");

// Array of tasks for each day (You can customize the tasks for each day)
const tasks = [
  "Set clear goals and break them into smaller milestones",
  "Learn the basics of HTML, CSS, and JavaScript",
  "Build a simple website",
  // Add all 100 days' tasks here...
  "Complete your 100 days challenge!"
];

// Initialize the list with checkboxes
document.addEventListener("DOMContentLoaded", () => {
  // Generate the challenge list
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `
      <input type="checkbox" id="day${index + 1}" class="form-check-input">
      <label for="day${index + 1}" class="form-check-label">${task}</label>
    `;
    challengeList.appendChild(listItem);
  });

  // Load saved progress from localStorage
  loadProgress();
});

// Save progress to localStorage
saveProgressBtn.addEventListener("click", () => {
  const completedTasks = [];
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      completedTasks.push(index + 1); // Save day number for completed tasks
    }
  });
  
  // Save the completed tasks to localStorage
  localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  alert("Progress saved!");
});

// Load saved progress from localStorage
function loadProgress() {
  const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  
  checkboxes.forEach((checkbox, index) => {
    if (completedTasks.includes(index + 1)) {
      checkbox.checked = true; // Mark the checkbox as checked if the task was completed
    }
  });
}
