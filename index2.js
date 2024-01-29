let task = document.getElementById('add-t');
let add = document.getElementById('add');
let list = document.getElementById('mytasks');

let del = document.getElementsByClassName('done');
console.log(del);

showList();

add.addEventListener('click', () => {
    let taskList = localStorage.getItem('taskList');
    if (taskList == null) {
        store = [];
    } else {
        store = JSON.parse(taskList);
    }

    let msg = task.value;
    store.push(msg);
    localStorage.setItem('taskList', JSON.stringify(store));

    task.value = '';
    addToList(msg);
});

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('done')) {
        // Remove the task element from the DOM
        e.target.parentElement.remove();

        // Get the index of the clicked task
        let index = Array.from(list.children).indexOf(e.target.parentElement);

        // Remove the task from localStorage
        let mystore = JSON.parse(localStorage.getItem('taskList'));
        mystore.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(mystore));
    }
});

function showList() {
    let taskList = localStorage.getItem('taskList');
    if (taskList == null) {
        store = [];
    } else {
        store = JSON.parse(taskList);
    }

    store.forEach((task) => {
        addToList(task);
    });
}

function addToList(task) {
    let newdiv = document.createElement('div');
    let para = document.createElement('p');
    let innerDiv = document.createElement('div');

    newdiv.classList.add('task');
    para.classList.add('task-name');
    innerDiv.classList.add('done');

    para.innerHTML = task;
    innerDiv.innerHTML = 'X';

    newdiv.appendChild(para);
    newdiv.appendChild(innerDiv);

    list.appendChild(newdiv);
}
