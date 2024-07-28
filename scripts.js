document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', addTask);
    document.getElementById('new-task').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    
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
        if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
            taskList.removeChild(li);
        }
    };

    li.appendChild(taskText);
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}
