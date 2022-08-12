function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

function colorRandom() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onClickStart() {
  timerId = setInterval(colorRandom, 2000);
}

function onClickStop() {
  clearInterval(timerId);
}
