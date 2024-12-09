document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('todo-input');
  const addBtn = document.getElementById('add-btn');
  const todoList = document.getElementById('todo-list');

  addBtn.addEventListener('click', function() {
    const text = input.value.trim();
    if (text !== '') {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = text;
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', function() {
        todoList.removeChild(li);
      });
      li.appendChild(span);
      li.appendChild(delBtn);
      todoList.appendChild(li);
      input.value = '';
    }
  });
});
