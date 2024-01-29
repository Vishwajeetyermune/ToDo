

let task=document.getElementById('add-t');
let add=document.getElementById('add')
let list=document.getElementById('mytasks')

let del=document.getElementsByClassName('done')
console.log(del)


showList();


add.addEventListener('click',()=>{
    
    let taskList=localStorage.getItem('taskList')
    // console.log("btnclk",taskList)
    if(taskList==null){
        store=[]
    }
    else{
        store=JSON.parse(taskList)
        console.log('first-store',store)
    }
        let msg=task.value;
        store.push(msg)
        // console.log("store",store)
        localStorage.setItem('taskList',JSON.stringify(store))
        // console.log("localstorge",localStorage.getItem('taskList'))

        task.value=''
        addToList(msg)
        
        // console.log(para)
        

})

// console.log(list)


list.addEventListener('click',(e)=>{
    // if(e.target.classList.contains('done')){
    //     e.target.parent.remove();
    // }
    // e.target.parent.remove();
    let task=e.target.parentElement
    console.log('e.target',task)
    console.log(e.target.parentElement.remove())
    let store=JSON.parse(localStorage.getItem('taskList'))
    StorageEvent.forEach((item,i)=>{
        i.addEventListener('click',()=>{
            store.splice(store,i)
        })
    })
    localStorage.setItem('taskList',JSON.stringify(store))

    location.reload()


})

function showList(){
let taskList=localStorage.getItem('taskList');

if(taskList==null){
    store=[];
}
else{
    store=JSON.parse(taskList)
    console.log('in else of showlist',store)
}
    store.forEach((task)=>{
    
        console.log(task)
        let newdiv=document.createElement('div');
        let para=document.createElement('p')
        let innerDiv=document.createElement('div')
    
        newdiv.classList.add('task')
        para.classList.add('task-name')
        innerDiv.classList.add('done')
    
        para.innerHTML=task;
        innerDiv.innerHTML="X";
        newdiv.appendChild(para);
        newdiv.appendChild(innerDiv);
    
        list.appendChild(newdiv)


    })

}

function addToList(task){
    let newdiv=document.createElement('div');
    let para=document.createElement('p')
    let innerDiv=document.createElement('div')

    newdiv.classList.add('task')
    para.classList.add('task-name')
    innerDiv.classList.add('done')

    para.innerHTML=task;
    innerDiv.innerHTML="X";
    newdiv.appendChild(para);
    newdiv.appendChild(innerDiv);

    list.appendChild(newdiv)

}