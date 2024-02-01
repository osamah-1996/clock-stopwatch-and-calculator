//Here is the part of the open navigation.......
var navLinks = document.getElementById("navLinks");
var fatimes = document.getElementById("fatimes");
//show the nabar.....
function showNavbar(){
  navLinks.style.left = "0px";
  navLinks.style.width = "200px";
}
//hide the navbar....
function hidNavbar() {
  navLinks.style.display = "none";
}
//Here is the coding for the clock..
let  getHour    = document.getElementById("hour");
let  getMinute  = document.getElementById("minute");
let  getSecond  = document.getElementById("second");

setInterval(()=>{
  let curretntTime = new Date();
  console.log(curretntTime)
  getHour.innerHTML   = (curretntTime.getHours() < 10 ? "0"  :"") + curretntTime.getHours();
  getMinute.innerHTML = (curretntTime.getMinutes() < 10 ? "0": "") +  curretntTime.getMinutes();
  getSecond.innerHTML = (curretntTime.getSeconds() < 10? "0" : "") + curretntTime.getSeconds() ;
})

//here is the stopwatch js code area...
const timeElement  = document.querySelector('.timer-display');
const startBtn     = document.querySelector('#start-timer');
const puseBtn      = document.querySelector('#puse-timer');
const resetBtn     = document.querySelector('#reset-timer');
let seconds        =  0;
let interval       = null;

startBtn.addEventListener('click', start);
puseBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);


function time(){
  seconds++;
  let hrs   = Math.floor(seconds / 3600);
  let mints = Math.floor((seconds - (hrs * 3600)) / 60);
  let sec   = seconds % 60;
  if (sec < 10) sec = '0' + sec;
  if (mints < 10) mints = '0' + mints;
  if (hrs < 10) hrs = '0' + hrs;
  timeElement.innerHTML = `${hrs} : ${mints} : ${sec}`;

}
 


function start() {
  if(interval) {
    return
  }
  interval = setInterval(time, 1000);
};

function stop(){
  clearInterval(interval)
  interval = null;
};

function reset(){
  stop();
  seconds = 0;
  timeElement.innerHTML = '00:00:00';
}






