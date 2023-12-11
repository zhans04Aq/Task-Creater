const addTaskBtn = document.querySelector(".addTaskBtn")

const popUp = document.querySelector(".pop-up-window")

const closePopUp = document.querySelector('.close-pop-up')

const highPrior = document.querySelector('#high')
const midPrior = document.querySelector('#mid')
const lowPrior = document.querySelector('#low')
const currentPrior = document.querySelector('.current-priority')

const createButton = document.querySelector('.create-task-btn')

let columnName = document.querySelector('.column-name')

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

    // here u should write function to pass data into column
    popUp.classList.remove('active') 
})


// document.querySelector('div').removeAttribute('id');

// myPara.setAttribute("id", "id_you_like");