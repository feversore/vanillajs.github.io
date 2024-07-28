const clock = document.querySelector('.clock');
const date = document.querySelector('.date');

function getDay() {
  const currentDay = new Date();
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const week = weeks[currentDay.getDay()];

  console.log(week)

  const Month = currentDay.getMonth() + 1;
  const day = currentDay.getDate();
  
  date.innerHTML = `
    <span class="today">${Month}월 ${day}일 (${week})</span>
  `;
}

function getTime(){
  const timer = new Date();
  const hour = String(timer.getHours()).padStart(2, '0');
  const min = String(timer.getMinutes()).padStart(2, '0');
  const sec = String(timer.getSeconds()).padStart(2, '0');
  clock.innerHTML = `
    <span class="time">${hour} : ${min}</span>
  `;
}
getDay();
getTime();
setInterval(getTime, 1000);