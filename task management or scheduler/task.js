const taskInput = document.getElementById('task');
const priorityInput  = document.getElementById('priority');
const deadlineInput = document.getElementById('deadline');
const addTaskButton = document.getElementById('add');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const   task= taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    if(task.trim() === "" || deadline === "") {
        alert("Enter a task deadline");
        return;
    }
    const selectDate = new Date(deadline);
    const currentDate = new Date();

    if(selectDate < currentDate) {
        alert("select an upcoming date for the deadline");
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <p>${task}</p>
        <p>priority: ${priority}</p>
        <p>deadline: ${deadline}</p>
        <button class = "mark-done">Mark as done</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = "";
        priorityInput.value = "top";
        deadlineInput.value ="";
});

taskList.addEventListener('click', (event) => {
    if(event.target.classList.comtains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "#7e3b3b";
        event.target.disabled = true;
    }
});