let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function renderTasks(){

let list = document.getElementById("taskList");
let count = document.getElementById("taskCount");

list.innerHTML="";

let filteredTasks = tasks.filter(task=>{
if(filter==="pending") return !task.done
if(filter==="completed") return task.done
return true
});

filteredTasks.forEach((task,index)=>{

let li = document.createElement("li");

li.innerHTML = `
<span onclick="toggleTask(${index})" class="${task.done ? 'completed':''}">
${task.text}
</span>

<button onclick="deleteTask(${index})">❌</button>
`;

list.appendChild(li);

});

count.innerText="Total Tasks: "+tasks.length;

localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){

let input=document.getElementById("taskInput");

if(input.value.trim()==="") return;

tasks.push({
text:input.value,
done:false
});

input.value="";

renderTasks();
}

function toggleTask(index){

tasks[index].done=!tasks[index].done;

renderTasks();
}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();
}

function handleKey(e){

if(e.key==="Enter"){
addTask();
}

}

function showAll(){
filter="all";
renderTasks();
}

function showPending(){
filter="pending";
renderTasks();
}

function showCompleted(){
filter="completed";
renderTasks();
}

function toggleDark(){
document.body.classList.toggle("dark");
}

renderTasks();