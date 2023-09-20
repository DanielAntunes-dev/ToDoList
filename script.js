const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const taskList = document.querySelector('.list-tasks')

let tasks = []

// Função para adicionar uma tarefa 
function addTasks() {
    const taskText = input.value.trim()

    if(taskText !== '') {
        tasks.push({
        task: input.value,
        check: false
    })

    input.value = ''
    
    } else {
        alert('O campo não pode estar em branco. Por favor, insira uma tarefa.');
    }
        

    displayTasks()
}

// Função para exibir uma tarefa
function displayTasks() {
    let newList = ''

    tasks.forEach((item, index) => {

        newList = newList + 
                    `
                    <li class="task ${item.check && "done"}">
                    <img src="image/checked.png" alt="check-na-tarefa" onclick="checkTask(${index})">
                    <p>${item.task}</p>
                    <img src="image/trash.png" alt="tarefa-para-o-lixo" onclick="deleteTask(${index})">
                    </li>
                    `
    })

    taskList.innerHTML = newList

    localStorage.setItem('list', JSON.stringify(tasks))
}

// Função para confirmar execução de uma tarefa
function checkTask(index) {
    tasks[index].check = !tasks[index].check

    displayTasks()
}

// Função para deletar uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1)

    displayTasks()
}

// Função para salvar as tarefas no local storage
function rechargeTasks() {
    const tasksLocalStorage = localStorage.getItem('list')

    if (tasksLocalStorage) {
        tasks = JSON.parse(tasksLocalStorage) 
    }


    displayTasks()
}

rechargeTasks()
button.addEventListener('click', addTasks)