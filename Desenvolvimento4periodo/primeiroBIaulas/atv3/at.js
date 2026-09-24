const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


function addTask() {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  li.appendChild(checkbox);
  li.appendChild(span);

  taskList.appendChild(li);

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});



taskList.addEventListener('click', (e) => {
  const clickedLi = e.target.closest('li');
  if (!clickedLi) return;

  
  if (e.target.classList.contains('task-checkbox')) {
    clickedLi.classList.toggle('completed');
    return;
  }

  
  clickedLi.remove();
});