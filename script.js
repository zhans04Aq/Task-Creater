const addTaskBtn = document.querySelector(".addTaskBtn")

const popUp = document.querySelector(".pop-up-window")

const closePopUp = document.querySelector('.close-pop-up')

const highPrior = document.querySelector('#high')
const midPrior = document.querySelector('#mid')
const lowPrior = document.querySelector('#low')
const currentPrior = document.querySelector('.current-priority')

const createButton = document.querySelector('.create-task-btn')



/* open pop up functionality */

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
/* open pop up functionality */


/* whole task functionality */

const addTodoTask = document.querySelector('.add-todo-task')
const task = document.querySelector('.task')

let initialHeight = 550
let currentHeight = initialHeight


// Assuming there's a container for the tasks
const tasksContainer = document.querySelector('.task-wrapper');

tasksContainer.addEventListener('click', (event) => {
    // Check if the clicked element is the "Add Todo Task" button
    if (event.target.classList.contains('add-todo-task')) {
        const task = event.target.closest('.task');

        if (task) {
            const todoWrapper = task.querySelector('.todo-wrapper');

            const todo = document.createElement('div');
            todo.classList.add('todo');

            const todoInp = document.createElement('input');
            todoInp.classList.add('todo-input');

            const delTodo = document.createElement('div');
            delTodo.classList.add('delete-todo');
            delTodo.textContent = '-';

            delTodo.addEventListener('click', () => {
                todo.remove();
                if(currentHeight>550){
                    currentHeight-=100
                }
                task.style.height = currentHeight + 'px' 
            });

            todo.append(todoInp);
            todo.append(delTodo);

            todoWrapper.append(todo);

            currentHeight +=100
            task.style.height = currentHeight + 'px' 
        }
    }

    if (event.target.classList.contains('delete-task')) {
        const task = event.target.closest('.task');

        if (task) {
            task.remove();
        }
    }
});

initialHeight = 550
currentHeight = initialHeight
/* todo functionality */

/* add task functionality */


const createColBtn = document.querySelector('.create-task-btn')


createColBtn.addEventListener('click', ()=>{

    initialHeight = 550
    currentHeight = initialHeight

    let columnName = document.querySelector('.column-name').value.trim()
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    const taskContent = document.createElement('div')
    taskContent.classList.add('task-content')
    
    const taskPriority = document.createElement('div')
    taskPriority.classList.add('task-priority')

    const taskName = document.createElement('h1')
    taskName.classList.add('task-name')

    const taskUpperContent = document.createElement('div')
    taskUpperContent.classList.add('task-upper-content')

    const taskLowerContent = document.createElement('div')
    taskLowerContent.classList.add('task-lower-content')

    const todoWrapper = document.createElement('div')
    todoWrapper.classList.add('todo-wrapper')

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const todoInp = document.createElement('input')
    todoInp.classList.add('todo-input')

    const todoDel = document.createElement('div')
    todoDel.classList.add('delete-todo')
    todoDel.textContent = '-'

    const addTodoBtn = document.createElement('button')
    addTodoBtn.classList.add('add-todo-task')
    addTodoBtn.textContent = 'Add Task'

    const binBtn = document.createElement('img')
    binBtn.classList.add('delete-task')
    binBtn.src = "/img/3491495 1.png"

    function appendAll(){
        taskDiv.append(taskContent) // create main task div
        /* upper content */
        taskContent.append(taskUpperContent) // creating upper content
        taskUpperContent.append(taskPriority) // adding priority
        taskUpperContent.append(taskName)
        /* upper content */

        /* todo wrapper */
        taskContent.append(todoWrapper)
        todoWrapper.append(todoDiv)
        todoDiv.append(todoInp)
        todoDiv.append(todoDel)
        /* todo wrapper */

        /* upper content */
        taskContent.append(taskLowerContent)
        taskLowerContent.append(addTodoBtn)
        taskLowerContent.append(binBtn)
        /* upper content */

        tasksContainer.append(taskDiv)
    }

        if(columnName.length>0){
            taskName.textContent = columnName
            if(currentPrior.getAttribute('id')=='high'){
                taskPriority.setAttribute('id','high')
                popUp.classList.remove('active')
                appendAll()
            } else if (currentPrior.getAttribute('id')=='mid'){
                taskPriority.setAttribute('id','mid')
                popUp.classList.remove('active')
                appendAll()
            } else if (currentPrior.getAttribute('id') == 'low'){
                taskPriority.setAttribute('id','low')
                popUp.classList.remove('active')
                appendAll()
            } else {
                alert('didn`t append')
            }
        } else {
            alert('column name is empty')
        }
})

/* add task functionality */