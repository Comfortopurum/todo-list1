document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const taskId = parseInt(urlParams.get('id'));

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(task => task.id === taskId);

    if (task) {
        document.getElementById('edit-name').value = task.name;
        document.getElementById('edit-description').value = task.description;
        document.getElementById('edit-date').value = task.date;
    }

    document.getElementById('edit-form').addEventListener('submit', function(event) {
        event.preventDefault();

        task.name = document.getElementById('edit-name').value;
        task.description = document.getElementById('edit-description').value;
        task.date = document.getElementById('edit-date').value;

        localStorage.setItem('tasks', JSON.stringify(tasks));

        window.location.href = 'index.html';
    });
});
