function initModal(){

const myModal=document.querySelector('.modal');
const btn = document.querySelector('.call_modal');
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  myModal.style.display = "block";
}

span.onclick = function() {
  myModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
}
}
initModal();


//criar botao close_task
function createButton(){

const myTask_list=document.querySelectorAll('.task');
let i;
for(i=0;i<myTask_list.length;i++){
  const span=document.createElement('span');
  let txt=document.createTextNode('\u00D7');
  span.className="close_task";
  span.appendChild(txt);
  myTask_list[i].appendChild(span);
}
}
createButton();

function hideTask(){
const close= document.querySelectorAll('.close_task');
let i;
for(i=0;i<close.length;i++){
  close[i].onclick=function(){
    let div=this.parentElement;
    div.style.display="none";
  }
}

}
hideTask();

//adicionando a class checked quando clica na tarefa

function initChecked(){

  const task_list=document.querySelectorAll('.task');
  task_list.forEach((task)=>{
    task.addEventListener('click',function(){
      task.classList.toggle('checked');
      console.log(task);
    })

  })
}
initChecked();

//adicionando novos itens na lista de tarefas 

function newTask(){
const div=document.createElement('div');
const inputValue=document.getElementById('myInput').value;
const text= document.createTextNode(inputValue);
const h4=document.createElement('h4');
h4.appendChild(text);
div.appendChild(h4);
if(inputValue !== ''){
  document.querySelector('.tasks_list').appendChild(div);
  div.classList.add("task");

}


document.getElementById('myInput').value="";

const span=document.createElement('span');
let txt=document.createTextNode('\u00D7');
span.className="close_task";
span.appendChild(txt);
div.appendChild(span);

const close=document.querySelectorAll('.close_task');
let i;
for(i=0;i<close.length;i++){
  close[i].onclick=function(){
    let div= this.parentElement;
    div.style.display='none';
  }
}
div.addEventListener('click',function(){
  div.classList.toggle('checked');
})


}
newTask();