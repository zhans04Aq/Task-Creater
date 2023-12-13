const addTaskBtn = document.querySelector(".addTaskBtn")

const popUp = document.querySelector(".pop-up-window")

const closePopUp = document.querySelector('.close-pop-up')

const highPrior = document.querySelector('#high')
const midPrior = document.querySelector('#mid')
const lowPrior = document.querySelector('#low')
const currentPrior = document.querySelector('.current-priority')

const createButton = document.querySelector('.create-task-btn')

let columnName = document.querySelector('.column-name')



const todoWrapper = document.querySelector('.todo-wrapper')

addTaskBtn.addEventListener('click', ()=>{
    popUp.classList.add('active')
})

closePopUp.addEventListener('click', ()=>{
    popUp.classList.remove('active')
})

highPrior.addEventListener('click', ()=>{
    currentPrior.removeAttribute('id');
    currentPrior.setAttribute('id', 'high')
})

midPrior.addEventListener('click', ()=>{
    currentPrior.removeAttribute('id');
    currentPrior.setAttribute('id', 'mid')
})


lowPrior.addEventListener('click', ()=>{
    currentPrior.removeAttribute('id');
    currentPrior.setAttribute('id', 'low')
})

createButton.addEventListener('click', ()=>{
    let colName = document.querySelector('.column-name')
    let colVal = colName.value
    let currPriorVal = ''
    if(currentPrior.getAttribute("id")=='high'){
        currPriorVal = 'high'
        popUp.classList.remove('active') 
    } else if (currentPrior.getAttribute('id')=='mid'){
        currPriorVal ='mid'
        popUp.classList.remove('active') 
    } else if(currentPrior.getAttribute('id')=='low'){
        currPriorVal = 'low'
        popUp.classList.remove('active') 
    } else{
        alert('u did not set priority')
    }
    const taskDiv = document.createElement('div')   
    taskDiv.classList.add('task')
    const taskPriority = document.createElement('div')
    taskPriority.classList.add('task-priority')
    const taskName = document.createElement('h1')
    document.querySelector('.task-wrapper').append(taskDiv)
})

// const addTodo = document.querySelector('.add-todo-task')



document.querySelector('.add-todo-task').addEventListener('click', function () {
    const todoWrapper = document.querySelector('.todo-wrapper');
    
    // Create a new 'todo' div
    const todo = document.createElement('div');
    todo.classList.add('todo');

    // Create 'input' element for the todo
    const todoInp = document.createElement('input');
    todoInp.classList.add('todo-input');

    // Create 'button' element to delete the todo
    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.classList.add('delete-todo');
    deleteTodoBtn.textContent = '-';
    
    // Add event listener to delete the todo when clicked
    deleteTodoBtn.addEventListener('click', function () {
        todo.remove();
        adjustTaskHeight();
    });

    // Append the 'input' and 'button' elements to the 'todo' div
    todo.appendChild(todoInp);
    todo.appendChild(deleteTodoBtn);

    // Append the 'todo' div to the 'todoWrapper'
    todoWrapper.appendChild(todo);

    // Adjust the height of the task div
    adjustTaskHeight();
});

function adjustTaskHeight() {
    const task = document.querySelector('.task');
    const todoWrapper = document.querySelector('.todo-wrapper');
    
    // Set the height of the task div to the height of todoWrapper
    task.style.minHeight = todoWrapper.clientHeight + 'px';
}



// document.querySelector('div').removeAttribute('id');

// myPara.setAttribute("id", "i d_you_like");