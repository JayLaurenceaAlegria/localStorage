// setlocal storage item ------------------------------------------->>>>>>>>>>>>>>>>>>>>
// localStorage.setItem('name','John Doe');
// localStorage.setItem('age','30');

// session storage item ------------------------------------------->>>>>>>>>>>>>>>>>>
// sessionStorage.setItem('name','Jay Law')

//remove local remove storage ---------------------------------------->>>>>>>>>>>>>>>>>>
// localStorage.removeItem('name');

// // get from local storage 
// const name = localStorage.getItem('age');
// localStorage Clear ------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>

// 
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.querySelector('#task').value;
    // console.log(task);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    } 

    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    
    tasks.forEach(function(task){
        console.log(task);
    })
    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('task'));
