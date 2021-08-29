var tasks = document.getElementById('list')
var counter = 0
function addtask(){
    var task = document.getElementById('task')
    if(task.value != ''){
        document.getElementById('list').innerHTML = tasks.innerHTML +'<li class="taska">' + task.value + '</li>' ;
        var tasksList = document.querySelectorAll('.taska');
        tasksList.forEach((taska,i) => {
            tasksList[i].addEventListener('click',()=>{
            tasksList[i].style.textDecoration = 'line-through'
            })
        });
        counter++
    }
}

