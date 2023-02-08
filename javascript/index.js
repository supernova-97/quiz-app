const getCardAnswer = document.querySelector('[data-js="card__answer"]');
const showAnswer = document.querySelector('[data-js="card__answer-button"]');

showAnswer.addEventListener("click", () => {
  getCardAnswer.classList.toggle("card__answer--visible");
});
