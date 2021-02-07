const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function changeColor() {
  const i = randomIntegerFromInterval(0, colors.length - 1);

  refs.body.setAttribute('style', `background-color: ${colors[i]}`);
}

let colorId = null;

function start() {
  colorId = setInterval(changeColor, 1000);
  refs.startBtn.setAttribute('disabled', 'disabled');
}

function stop() {
  clearInterval(colorId);
  refs.startBtn.removeAttribute('disabled');
}
refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);
