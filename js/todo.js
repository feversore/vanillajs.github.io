const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');
const todoItems = document.createElement('ul');
todoItems.classList.add('list');

let todosArr = []; //저장된 로컬스토리지 값이 세팅되어있다
console.log(`로컬스토리지 값 ` + todosArr);

function saveTodo() {
  localStorage.setItem('todo', JSON.stringify(todosArr));
}

function deleteTodo(event) {
  event.preventDefault();
  const parentEl = event.target.parentElement;
  console.log(parseInt(parentEl.id));
  parentEl.remove();
  todosArr = todosArr.filter( (todo) => todo.id !== parseInt(parentEl.id));  
  saveTodo();

  //추후 로컬스토리지에서 배열로 저장된 값의 length가 (li가)1일때  ul로 삭제 처리
  const itemEl = todoItems.querySelectorAll('li');
  // console.log(`남은갯수 ` +itemEl.length);
  if(itemEl.length === 0) {
    todoItems.remove();
  }  
}

function showTodo(todoObj) {
  const todoItem = document.createElement('li');
  const todoDelBtn = document.createElement('button');
  todoDelBtn.classList.add('btn-del');
  todoItem.id = todoObj.id;
  todoItem.innerHTML = `<span class="todo-text">${todoObj.text}</span>`;
  todoDelBtn.innerHTML =  `<span class="blind">삭제</span>`;
  todoList.classList.remove('hidden');
  todoItem.appendChild(todoDelBtn);
  todoItems.appendChild(todoItem);
  todoList.appendChild(todoItems);

  todoDelBtn.addEventListener('click', deleteTodo);
}

function initTodo(event) {
  event.preventDefault();
  const todo = todoInput.value;
  const todoObj = {
    id : Date.now(),
    text : todo    
  };
  todoInput.value = '';
  todosArr.push(todoObj);
  showTodo(todoObj);
  saveTodo();
}

todoForm.addEventListener('submit', initTodo);


//로컬스토리지에 저장된 배열 확인
//로컬스토리지에 저장된 배열만큼 그려준다
//저장된 배열은 string. 객체로 바꿔준다
//로컬스토리지 저장된 값을 전역변수로 선언해준 배열에 업데이트 시켜준다

const getTodosArr = localStorage.getItem('todo');
// console.log(getTodosArr);

if(getTodosArr !== null) {
  todoList.classList.remove('hidden');
  const parseTodoArr = JSON.parse(getTodosArr);
  todosArr = parseTodoArr; //로컬스토리지 값 재할당
  parseTodoArr.forEach(showTodo);
}