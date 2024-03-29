function addTask() {
    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();

    if (!newTask) {
        alert('Please enter a task.');
        return;
    }

    const list = document.getElementById('todo-list');
    const item = document.createElement('li');
    item.textContent = newTask;
    item.onclick = function() {
        this.classList.toggle('completed');
    };
    
    list.appendChild(item);
    input.value = ''; 
}


document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
