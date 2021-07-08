import { createCardComponent } from "./lib/card.js";
import { data } from "./lib/db.js";

/* Iterate over the data array, create a card using the createCardComponent 
function and append it to the element (in my case section) that is supposed 
to hold the quiz question cards */

const sectionElement = document.querySelector("section.quiz-cards");

data.forEach((card) => {
  const cardComponent = createCardComponent(card);
  //console.log(cardComponent);
  sectionElement.append(cardComponent);
});

const showAnswerButtonElements =
  document.querySelectorAll("button.show-answer");
const answerElements = document.querySelectorAll(".answers");

//Hide and show answer

// for (let i = 0; i < answerElements.length; i++) {
//   const currentButton = showAnswerButtonElements[i];
//   const currentAnswer = answerElements[i];
//   currentButton.addEventListener("click", () => {
//     currentAnswer.classList.toggle("hidden");
//     if (currentButton.textContent === "Show Answer") {
//       currentButton.textContent = "Hide Answer";
//     } else {
//       currentButton.textContent = "Show Answer";
//     }
//   });
// }

//  toggable bookmark

// const bookmarkButtons = document.querySelectorAll(".bookmarks");
// for (let i = 0; i < bookmarkButtons.length; i++) {
//   const currentBookmark = bookmarkButtons[i];
//   currentBookmark.addEventListener("click", () => {
//     if (currentBookmark.classList.contains("far")) {
//       currentBookmark.classList.replace("far", "fas");
//     } else {
//       currentBookmark.classList.replace("fas", "far");
//     }
//   });
// }
