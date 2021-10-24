import "../css/style.scss";

const timeRef = document.querySelector(".time");
const startRef = document.querySelector(".start");
const stopRef = document.querySelector(".stop");
const resetRef = document.querySelector(".reset");

let miliseconds = 00;
let seconds = 00;
let minutes = 00;
let timer;

const render = () =>
  (timeRef.innerHTML = `
    ${("0" + minutes).slice(-2)}
  : ${("0" + seconds).slice(-2)}
  : ${("0" + miliseconds).slice(-2)}`);
render();

const count = () => {
  if (miliseconds === 99) {
    if (seconds === 59) {
      minutes++;
      seconds = 00;
      miliseconds = 00;
    } else {
      seconds++;
      miliseconds = 00;
    }
  } else {
    miliseconds++;
  }
  render();
};

const reset = () => {
  clearInterval(timer);
  miliseconds = 00;
  seconds = 00;
  minutes = 00;
  render();
};

startRef.addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(count, 10);
});
stopRef.addEventListener("click", () => clearInterval(timer));
resetRef.addEventListener("click", reset);
