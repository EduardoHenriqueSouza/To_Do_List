//Seleciona os elementos HTML
const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

//Carrega as tarefas do localStorage ao iniciar
document.addEventListener('DOMContentLoaded', loadTasks);

//Função para salvar as tarefas no localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains('completed')
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
};

//Função para carregar tarefas salvas
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
};

//Função principal para criar uma tarefa na interface
function createTaskElement(text, completed = false) {
    const li = document.createElement("li");
    li.textContent = text;
    if (completed) li.classList.add('completed');


    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    //Cria um botão de remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.onclick = function () {
        taskList.removeChild(li);
        saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    saveTasks();
};

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

//Função para adicionar uma tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert('Digite uma tarefa!')
        return;
    }

    createTaskElement(taskText);
    taskInput.value = "";

};
