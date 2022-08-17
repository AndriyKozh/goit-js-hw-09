import Notiflix from 'notiflix';

const refs = {
  button: document.querySelector('button'),
  formEl: document.querySelector('form'),
  input: document.querySelector('input'),
};

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
    }, delay);
  });
}

refs.formEl.addEventListener('submit', onPromisFn);

function onPromisFn(ev) {
  ev.preventDefault();
  const {
    elements: { delay, step, amount },
  } = ev.currentTarget;

  let promiseMs = Number(delay.value);

  for (let el = 0; el < Number(amount.value); el += 1) {
    let turnPos = el + 1;

    createPromise(turnPos, promiseMs)
      .then(res => {
        Notiflix.Notify.success(res);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
    promiseMs += Number(step.value);
  }
}
