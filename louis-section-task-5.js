// empty task object
const task = {};

// example tasks
const task1 = {
    id: 1,
    name: 'Cleaning',
    description: 'Clean house',
    dueDate: '2020-09-20',
    assignee: 'Louis',
    status: 'In progress'
};

const task2 = {
    id: 2,
    name: 'Merge changes',
    description: 'Git pull and merge pull request to finalise changes',
    dueDate: '2020-09-22',
    assignee: 'Tash',
    status: 'In progress'
};

const task3 = {
    id: 3,
    name: 'Make a cup of tea',
    description: 'Making a Dilmah following formula',
    dueDate: '2020-09-20',
    assignee: 'Louis',
    status: 'In progress'
};

// Arrayoftasks
const taskManager = [task1, task2, task3];

// delete a task
    deleteTask = (task) => { 
        for (let i = 0; i < taskManager.length; i++) {
            if (taskManager[i] === task) {
            taskManager.splice(i, 1);    
            }
          } 
    }
        
    deleteTask(task1);
    console.log(taskManager);

// update task status
    updateTask = (taskId, status) => {
        for (let i = 0; i < taskManager.length; i++) {
          if (tasksManager[i].id === taskId) {
            taskManager[i].status = status;
          }
        } 
    }

    updateTask(1, 'Completed');
    console.log(taskManager);

// assign a task to
    assignTask = (taskId, assignee) => {
    for (let i = 0; i < taskManager.length; i++) {
      if (taskManager[i].id === taskId) {
        taskManager[i].assignee = assignee;
            }
        } 
    }

    assignTask(2, 'Louis');
    console.log(taskManager);

