export function createCardComponent(card) {
  //create divElement
  const divElement = document.createElement("div");
  divElement.classList.add("cards-content");

  // create bookmark
  const bookmarkElement = document.createElement("i");
  bookmarkElement.addEventListener("click", () => {
    if (bookmarkElement.classList.contains("far")) {
      bookmarkElement.classList.replace("far", "fas");
    } else {
      bookmarkElement.classList.replace("fas", "far");
    }
  });
  bookmarkElement.classList.add("far", "fa-bookmark", "bookmarks");
  divElement.append(bookmarkElement);

  // create heading
  const headingElement = document.createElement("h2");
  headingElement.textContent = "Question";
  divElement.append(headingElement);

  // create questionElement
  const questionElement = document.createElement("p");
  questionElement.textContent = card.question;
  divElement.append(questionElement);

  // create buttonElement and add addEventListener
  const buttonElement = document.createElement("button");
  buttonElement.addEventListener("click", () => {
    answerElement.classList.toggle("hidden");
    if (buttonElement.textContent === "Show Answer") {
      buttonElement.textContent = "Hide answer";
    } else {
      buttonElement.textContent = "Show Answer";
    }
  });
  buttonElement.classList.add("show-answer");
  buttonElement.textContent = "Show Answer";
  divElement.append(buttonElement);

  // create answerElement
  const answerElement = document.createElement("p");
  answerElement.classList.add("answers", "hidden");
  answerElement.textContent = card.answer;
  divElement.append(answerElement);

  // create ulElement
  const ulElement = document.createElement("ul");
  ulElement.classList.add("subject-tags");
  divElement.append(ulElement);

  // create forEach function to iterate through my liElement Hashtags
  card.tags.forEach((tag) => {
    const liElement = document.createElement("li");
    liElement.textContent = tag;
    ulElement.append(liElement);
  });
  // return
  return divElement;
}
