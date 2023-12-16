const addTaskBtn = document.querySelector(".addTaskBtn")

const popUp = document.querySelector(".pop-up-window")

const closePopUp = document.querySelector('.close-pop-up')

const highPrior = document.querySelector('#high')
const midPrior = document.querySelector('#mid')
const lowPrior = document.querySelector('#low')
const currentPrior = document.querySelector('.current-priority')

const createButton = document.querySelector('.create-task-btn')

let columnName = document.querySelector('.column-name')

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

/* add task functionality */


/* add task functionality */


/*  task del functionality */

const delTask = document.querySelector('.delete-task')
const taskWrapper = document.querySelector('.task-wrapper')

delTask.addEventListener('click', ()=>{
    const taskDiv = deleteTaskButton.closest('.task');
        taskDiv.remove();
})

/*  task del functionality */

/* todo functionality */

const addTodoTask = document.querySelector('.add-todo-task')
const task = document.querySelector('.task')

let initialHeight = 550
let currentHeight = initialHeight

// addTodoTask.addEventListener('click', ()=>{
//     const todoWrapper = document.querySelector('.todo-wrapper')

//     const todo = document.createElement('div')
//     todo.classList.add('todo')

//     const todoInp = document.createElement('input')
//     todoInp.classList.add('todo-input')

//     const delTodo = document.createElement('div')
//     delTodo.classList.add('delete-todo')
//     delTodo.textContent= '-'
    
//     delTodo.addEventListener('click', ()=>{
//         todo.remove()
//         currentHeight-=80
//         task.style.height = currentHeight + 'px'
//     })

//     todo.append(todoInp)
//     todo.append(delTodo)

//     todoWrapper.append(todo)


// })


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
                    currentHeight-=80
                }
                task.style.height = currentHeight + 'px' 
            });

            todo.append(todoInp);
            todo.append(delTodo);

            todoWrapper.append(todo);

            currentHeight +=80
            task.style.height = currentHeight + 'px' 
        }
    }
});


/* todo functionality */

