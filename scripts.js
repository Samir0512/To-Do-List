document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', addTask);
    document.getElementById('new-task').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

let taskCounter = 0;

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    taskCounter++;

    const li = document.createElement('li');
    
    const taskNumber = document.createElement('span');
    taskNumber.textContent = taskCounter + '. ';
    taskNumber.className = 'task-number';

    const taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    taskText.className = 'task-text';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Зачеркнуть';
    completeButton.className = 'complete';
    completeButton.onclick = function() {
        taskText.classList.toggle('completed');
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Исправить';
    editButton.className = 'edit';
    editButton.onclick = function() {
        const newTask = prompt('Edit your task:', taskText.textContent);
        if (newTask && newTask.trim() !== '') {
            taskText.textContent = newTask;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        taskList.removeChild(li);
        updateTaskNumbers();
    };

    li.appendChild(taskNumber);
    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}

function updateTaskNumbers() {
    const tasks = document.querySelectorAll('#task-list li .task-number');
    tasks.forEach((task, index) => {
        task.textContent = (index + 1) + '. ';
    });
    taskCounter = tasks.length;
}