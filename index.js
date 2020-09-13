// Create a JavaScript function called “validateTaskForm” that verifies that the inputs inserted by the user in the task form are correct

const formValidate = document.querySelector(".form-validate");
const formValidateAssignee = document.querySelector("#assignee");
const formValidateTaskDescription = document.querySelector("#taskDescription");
const formValidateTaskName = document.querySelector("#taskName");


formValidate.addEventListener("submit", (event) => {
  event.preventDefault();
// AssignedTo -> Not Empty and longer than 8 characters
  if (formValidateAssignee.value.length >= 8) {
    formValidateAssignee.classList.add("is-valid");
    formValidateAssignee.classList.remove("is-invalid");
  } else {
    formValidateAssignee.classList.add("is-invalid");
    formValidateAssignee.classList.remove("is-valid");
  }
// Description -> Not Empty and longer than 15 characters
  if (formValidateTaskDescription.value.length >= 15) {
    formValidateTaskDescription.classList.add("is-valid");
    formValidateTaskDescription.classList.remove("is-invalid");
  } else {
    formValidateTaskDescription.classList.add("is-invalid");
    formValidateTaskDescription.classList.remove("is-valid");
  }
// Name -> Not Empty and longer than 8 characters
  if (formValidateTaskName.value.length >= 8) {
    formValidateTaskName.classList.add("is-valid");
    formValidateTaskName.classList.remove("is-invalid");
// store input value into variable - Name -> String
    formValidateTaskName.value;
    alert(formValidateTaskName.value);
  } else {
    formValidateTaskName.classList.add("is-invalid");
    formValidateTaskName.classList.remove("is-valid");
  }
});

// set min date as today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
// document.getElementById("DueDate").setAttribute("min", today);
document.getElementsByClassName("DueDate").setAttribute("min", today);


// Store input value into a variable
// ID -> Int
// Description -> String