// Initialize data in localStorage if not already set
if (!localStorage.getItem('tasks')) {
  const initialData = [
    { name: "Research on Internship Programs", status: "Completed", dueDate: "2025-12-10" },
    { name: "Prepare Internship Report", status: "In Progress", dueDate: "2025-12-15" },
    { name: "Final Presentation Preparation", status: "Pending", dueDate: "2025-12-20" }
  ];
  localStorage.setItem('tasks', JSON.stringify(initialData));
}

// Function to read and display tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const taskContainer = document.getElementById('tasksContainer');
  taskContainer.innerHTML = ''; // Clear previous content

  tasks.forEach((task, index) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('col-md-4', 'task-card');

    const statusClass = task.status.toLowerCase().replace(" ", "-");
    taskCard.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${task.name}</h5>
          <p class="card-text">
            <span class="status-icon ${statusClass}">${task.status}</span>
          </p>
          <p class="card-text"><strong>Due Date:</strong> ${task.dueDate}</p>
          <button class="btn btn-warning btn-sm" onclick="editTask(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
        </div>
      </div>
    `;
    taskContainer.appendChild(taskCard);
  });
}

// Show Add Task Form
function showAddTaskForm() {
  document.getElementById('taskFormModalLabel').innerText = 'Add New Task';
  document.getElementById('task_name').value = '';
  document.getElementById('status').value = 'Completed';
  document.getElementById('due_date').value = '';
  document.getElementById('task_index').value = '';
  new bootstrap.Modal(document.getElementById('taskFormModal')).show();
}

// Edit Task
function editTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const task = tasks[index];

  document.getElementById('taskFormModalLabel').innerText = 'Edit Task';
  document.getElementById('task_name').value = task.name;
  document.getElementById('status').value = task.status;
  document.getElementById('due_date').value = task.dueDate;
  document.getElementById('task_index').value = index;

  new bootstrap.Modal(document.getElementById('taskFormModal')).show();
}

// Save new or edited task
document.getElementById('taskForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('task_name').value;
  const status = document.getElementById('status').value;
  const dueDate = document.getElementById('due_date').value;
  const index = document.getElementById('task_index').value;

  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (index) {
    // Update existing task
    tasks[index] = { name, status, dueDate };
  } else {
    // Add new task
    tasks.push({ name, status, dueDate });
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
  bootstrap.Modal.getInstance(document.getElementById('taskFormModal')).hide();
});

// Delete Task
function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.splice(index, 1); // Remove the task
  localStorage.setItem('tasks', JSON.stringify(tasks));
  loadTasks();
}

// Load tasks when the page is loaded
loadTasks();

// Dynamically load the navbar (header)
document.getElementById("header").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="dashboard.html">Internship Tracker</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="dashboard.html">Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="students.html">Students</a></li>
          <li class="nav-item"><a class="nav-link" href="tasks.html">Tasks</a></li>
          <li class="nav-item"><a class="nav-link" href="internships.html">Internships</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

// Dynamically load the footer (footer)
document.getElementById("footer").innerHTML = `
  <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2025 Internship Tracker. All rights reserved.</p>
  </footer>
`;
