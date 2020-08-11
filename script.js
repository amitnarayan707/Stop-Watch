console.log("working");

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let second = document.getElementById("second");
let milliSecond = document.getElementById("milliSecond");
let s = 0;
let m = 0;
let showTimer;

startBtn.addEventListener("click", () => {
  clearInterval(showTimer);
  showTimer = setInterval(showMilliSecond, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(showTimer);
});

resetBtn.addEventListener("click", () => {
  clearInterval(showTimer);
  s = 0;
  m = 0;
  second.innerText = "00";
  milliSecond.innerText = "00";
});

function showMilliSecond() {
  m++;
  if (m < 9) {
    milliSecond.innerText = "0" + m;
  }
  if (m > 9) {
    milliSecond.innerText = m;
  }
  if (m > 99) {
    s++;
    second.innerText = "0" + s;
    m = 0;
    milliSecond.innerText = "0" + 0;
  }
  if (s > 9) {
    second.innerText = s;
  }
}
