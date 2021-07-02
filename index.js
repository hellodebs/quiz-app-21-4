const showAnswerButtonElements =
  document.querySelectorAll("button.show-answer");
const answerElements = document.querySelectorAll(".answers");

for (let i = 0; i < answerElements.length; i++) {
  const currentButton = showAnswerButtonElements[i];
  const currentAnswer = answerElements[i];
  currentButton.addEventListener("click", () => {
    currentAnswer.classList.toggle("hidden");
    if (currentButton.textContent === "Show Answer") {
      currentButton.textContent = "Hide Answer";
    } else {
      currentButton.textContent = "Show Answer";
    }
  });
}
