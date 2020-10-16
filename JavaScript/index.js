// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// Select the New Task Form
const formValidate = document.querySelector(".form-validate1");

// variables for form fields
const formAssignee = document.querySelector("#assignee");
const formTaskDescription = document.querySelector("#taskDescription");
const formTaskName = document.querySelector("#taskName");
const formDueDate = document.querySelector("#dueDate");
const formStatus = document.querySelector("#taskStatus");

// variables for object
let completedForm = { name: "", description: "", assignee: "", dueDate: "", status: ""};

// event listener for click on submit button
formValidate.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();
  
  // AssignedTo -> Not Empty and longer than 8 characters
  if (formAssignee.value.length >= 8) {
    formAssignee.classList.add("is-valid");
    formAssignee.classList.remove("is-invalid");
    // store input value into variable - Assignee -> String
    completedForm.assignee = formAssignee.value;
    // error message for incorrect input
  } else {
    formAssignee.classList.add("is-invalid");
    formAssignee.classList.remove("is-valid");
  }

  // Description -> Not Empty and longer than 15 characters
  if (formTaskDescription.value.length >= 15) {
    formTaskDescription.classList.add("is-valid");
    formTaskDescription.classList.remove("is-invalid");
    // store input value into variable - Description -> String
    completedForm.description = formTaskDescription.value;
    // error message for incorrect input
  } else {
    formTaskDescription.classList.add("is-invalid");
    formTaskDescription.classList.remove("is-valid");
  }

  // Name -> Not Empty and longer than 8 characters
  if (formTaskName.value.length >= 8) {
    formTaskName.classList.add("is-valid");
    formTaskName.classList.remove("is-invalid");
    // store input value into variable - Name -> String
    completedForm.name = formTaskName.value;
    // error message for incorrect input
  } else {
    formTaskName.classList.add("is-invalid");
    formTaskName.classList.remove("is-valid");
  }

  // set min date as today
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();
  if(dd<10){
          dd='0'+dd
      } 
      if(mm<10){
          mm='0'+mm
      } 

  today.setUTCHours(0, 0, 0, 0);

  if (formDueDate.valueAsNumber < today.getTime()) {
    alert("Date is in the past");
  } else {
    completedForm.dueDate = formDueDate.value;
    formDueDate.classList.add("is-valid");
    formDueDate.classList.remove("is-invalid");
  }
  
  // store input value into variable - status -> String
  completedForm.status = formStatus.value;

  // Add the task to the task manager
  taskManager.addTask(
    completedForm.name,
    completedForm.description,
    completedForm.assignee,
    completedForm.dueDate,
    completedForm.status
  );

  // render the tasks
  taskManager.render();

// Form reset
  formReset = () => {
    formValidate.reset();
    completedForm = { name: "", description: "", assignee: "", dueDate: "", status: ""};
  };
  formReset()
  // Clear the bootstrap validation ready for next inputs
  formAssignee.classList.remove('is-valid');
  formTaskDescription.classList.remove('is-valid');
  formTaskName.classList.remove('is-valid');
  formDueDate.classList.remove('is-valid');
  formStatus.classList.remove('is-valid');
  // Close the modal by toggling
  $('#myModal').modal('toggle')
  $('#collapseOne').collapse('toggle');
});

// select the task list and store as variable
const tasksList = document.querySelector("#tasksList");
// add event listener for click event
tasksList.addEventListener("click", (event) => {
  // check if done button was clicked
  if (event.target.classList.contains("done-button")) {
    // get parent task
    const parentTask = event.target.parentElement;
    // get taskId of parent task
    const taskId = Number(parentTask.dataset.taskId);
    // get task from the TaskManager using taskId
    const task = taskManager.getTaskById(taskId);
    // update the task status to 'Done'
    task.status = "DONE";
<<<<<<< Updated upstream
||||||| constructed merge base
    // call taskmanager save method
    taskManager.save();
    taskManager.render();
  }
  // check if delete button was clicked
  if (event.target.classList.contains("delete-button")) {
    // get parent task
    const parentTask = event.target.parentElement;
    // get taskId of parent task
    const taskId = Number(parentTask.dataset.taskId);
    // delete the task
    taskManager.deleteTask(taskId);
    // save the task to localStorage
    taskManager.save();
    // render tasks
=======
    // save the task to localStorage
    taskManager.save();
    // render tasks
    taskManager.render();
  }
  // check if delete button was clicked
  if (event.target.classList.contains("delete-button")) {
    // get parent task
    const parentTask = event.target.parentElement;
    // get taskId of parent task
    const taskId = Number(parentTask.dataset.taskId);
    // get task from the TaskManager using taskId
    taskManager.deleteTask(taskId);
    // save the task to localStorage
    taskManager.save();
    // render tasks
>>>>>>> Stashed changes
    taskManager.render();
<<<<<<< Updated upstream
  } 
||||||| constructed merge base
  }
=======
  }
  // check if review button was clicked
  if (event.target.classList.contains("review-button")) {
    // get the parent task
    const parentTask = event.target.parentElement;
    // get the taskId of the parent task
    const taskId = Number(parentTask.dataset.taskId);
    // get task from the TaskManager using taskId
    const task = taskManager.getTaskById(taskId);
    // update the task status to 'For Review'
    task.status = "For Review";
    // save the task to localStorage
    taskManager.save();
    // render tasks
    taskManager.render();
  }
  // check if progress button was clicked
  if (event.target.classList.contains("progress-button")) {
    // get the parent Task
    const parentTask = event.target.parentElement;
    // get the taskId of the parent task
    const taskId = Number(parentTask.dataset.taskId);
    // get task from the TaskManager using taskId
    const task = taskManager.getTaskById(taskId);
    // update the task status to 'In Progress'
    task.status = "In Progress";
    // save the task to localStorage
    taskManager.save();
    // render tasks
    taskManager.render();
  }
>>>>>>> Stashed changes
});
