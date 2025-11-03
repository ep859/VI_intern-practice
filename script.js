const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevents toggling completed when deleting
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
