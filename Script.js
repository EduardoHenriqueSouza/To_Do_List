//Seleciona os elementos HTML
const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

//Função para adicionar uma tarefa
function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert('Digite uma tarefa!')
        return;
    }

    //Cria um item na lista (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    //Cria um botão de remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.onclick = function(){
        taskList.removeChild(li);
    }

    //Adiciona botão ao item
    li.appendChild(removeBtn);

    //Adiciona o item na lista
    taskList.appendChild(li);

    //Limpa os campos de entrada
    taskInput.value = '';
    taskInput.focus();
}

//Evento de click no botão
addBtn.addEventListener('click', addTask);

//Permite adicionar uma tarefa preessionando enter
taskInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTask();
    }

});
