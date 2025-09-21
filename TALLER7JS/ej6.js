const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Por favor escribe una tarea.");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons");

  const checkIcon = document.createElement("span");
  checkIcon.textContent = "✔";
  checkIcon.classList.add("check");

  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = (checkIcon.style.color === "green") ? "orange" : "green";
  });

  const deleteIcon = document.createElement("span");
  deleteIcon.textContent = "🗑";
  deleteIcon.classList.add("delete");

  deleteIcon.addEventListener("click", () => {
    const confirmDelete = confirm("¿Estás seguro de eliminar esta tarea?");
    if (confirmDelete) {
      taskDiv.remove();
    }
  });

  iconsDiv.appendChild(checkIcon);
  iconsDiv.appendChild(deleteIcon);

  taskDiv.appendChild(taskContent);
  taskDiv.appendChild(iconsDiv);

  taskList.appendChild(taskDiv);

  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
