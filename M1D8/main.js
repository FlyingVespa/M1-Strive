// assign variables to the classes (grab from DOM)
const submitForm = document.querySelector(".add");
const addButton = document.querySelector(".add-task");
const taskList = document.querySelector(".tasks");
const list = document.querySelectorAll(".tasks li");

//
let listLength = list.lenght;

const generateNewTask = function (task) {
  const document = `
                    <li>
                  <input type="checkbox" id="task">
                  <label for="task">
                    <span class="check"></span>
                    ${task}
                  </label>
                  <i class="fas fa-minus-square delete fa-lg" style="color: rgb(149, 7, 7) "></i>
                </li>
               `;
  taskList.innerHTML += document;
};

const addTasks = function (e) {
  e.preventDefault();
  const task = submitForm.add.value;
  if (task.length > 0) {
    generateNewTask(task);
    submitForm.reset();
  }
};

// Listens to click and submit events that instantiates the function addTasks
submitForm.addEventListener("submit", addTasks);
addButton.addEventListener("click", addTasks);

// Deleting Tasks From List -> function
const deleteTasks = function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
};

taskList.addEventListener("click", deleteTasks);
