const getCardAnswer1 = document.querySelector('[data-js="card__answer1"]');
const showAnswer1 = document.querySelector('[data-js="card__answer-button1"]');

showAnswer1.addEventListener("click", () => {
  getCardAnswer1.classList.toggle("card__answer--visible");
});

const getCardAnswer2 = document.querySelector('[data-js="card__answer2"]');
const showAnswer2 = document.querySelector('[data-js="card__answer-button2"]');

showAnswer2.addEventListener("click", () => {
  getCardAnswer2.classList.toggle("card__answer--visible");
});

const getCardAnswer3 = document.querySelector('[data-js="card__answer3"]');
const showAnswer3 = document.querySelector('[data-js="card__answer-button3"]');

showAnswer3.addEventListener("click", () => {
  getCardAnswer3.classList.toggle("card__answer--visible");
});
