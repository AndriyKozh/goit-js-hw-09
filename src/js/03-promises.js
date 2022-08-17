import Notiflix from 'notiflix';

const refs = {
  button: document.querySelector('button'),
  formEl: document.querySelector('form'),
  input: document.querySelector('input'),
};
let delayMs = 0;
let stepMs = 0;
let amountEl = 0;
let promiseMs = delayMs;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      // Reject
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, promiseMs);
  });
}

refs.formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  const {
    elements: { delay, step, amount },
  } = ev.currentTarget;

  delayMs = Number(delay.value);
  stepMs = Number(step.value);
  amountEl = Number(amount.value);

  for (let el = 0; el < amountEl; el += 1) {
    let turnPos = el + 1;
    promiseMs += stepMs;

    createPromise(turnPos, promiseMs)
      .then(res => {
        console.log(res);
        Notiflix.Notify.success(res);
      })
      .catch(error => {
        console.log(error);
        Notiflix.Notify.failure(error);
      });
  }
});
