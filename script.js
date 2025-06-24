const form= document.querySelector('.formclass');
const input=document.getElementById('task');
const list=document.querySelector('.list');

form.addEventListener('submit', 
    function (event) {
  event.preventDefault();
  const taskText = input.value.trim();
if (taskText === '') return;
console.log("Task added:", taskText);

const li = document.createElement('li');
li.className = 'task-item';
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className = 'check-task';


const span = document.createElement('span');
span.className= 'task-text';
span.textContent = taskText;

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    span.style.textDecoration = 'line-through';
    span.style.color = '#999';
  } else {
    span.style.textDecoration = 'none';
    span.style.color = '#000';
  }
});

const del = document.createElement('button');
del.textContent = '❌';
del.className = 'delete-task';


li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(del);
list.appendChild(li);

input.value = '';

del.addEventListener('click',
     function () {
  li.remove();
});
});
