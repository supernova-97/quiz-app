const answerButtons = document.querySelectorAll(".card__answer-button");
const answers = document.querySelectorAll(".card__answer");

answerButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    answers[index].classList.toggle("card__answer--visible");
    textChange(index);
  });
});

function textChange(buttonIndex) {
  console.log(buttonIndex);
  if (answerButtons[buttonIndex].innerHTML === "Show Answer") {
    answerButtons[buttonIndex].innerHTML = "Hide Answer";
  } else {
    answerButtons[buttonIndex].innerHTML = "Show Answer";
  }
}
