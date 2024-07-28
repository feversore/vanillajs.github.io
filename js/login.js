
const containerFixed = document.getElementById('container');
const layer = document.getElementById('layer-alert');

const loginForm = document.getElementById('login-form');
const frmInput = loginForm.querySelector('input');
const frmButton = loginForm.querySelector('button');

const userInfo = document.querySelector('.user-info');
const userName = userInfo.querySelector('.nick');

const FIXED_CLASS = 'fixed';
const HIDDEN_CLASS = 'hidden';
const OPEN_CLASS = 'open';
const USER_KEY = 'username'

function showUserInfo(username) {
  userInfo.classList.remove(HIDDEN_CLASS);
  userName.innerText = username;
}

function initLogin(event){
  event.preventDefault();
  const username = frmInput.value;
  layer.classList.remove(OPEN_CLASS);
  localStorage.setItem(USER_KEY, username);
  showUserInfo(username);
}

const saveUsername = localStorage.getItem(USER_KEY);
// console.log(saveUsername);

if(saveUsername !== null) {
  layer.classList.remove(OPEN_CLASS);
  loginForm.classList.add(HIDDEN_CLASS);
  showUserInfo(saveUsername);
} else {
  containerFixed.classList.add(FIXED_CLASS)
  layer.classList.add(OPEN_CLASS);
  loginForm.classList.remove(HIDDEN_CLASS);
  userInfo.classList.add(HIDDEN_CLASS);
}

loginForm.addEventListener('submit', initLogin)