export function createCardComponent(card) {
  const divElement = document.createElement("div");
  divElement.classList.add("cards-content");
  const bookmarkElement = document.createElement("i");
  bookmarkElement.classList.add("far", "fa-bookmark", "bookmarks");
  divElement.append(bookmarkElement);

  const headingElement = document.createElement("h2");
  headingElement.textContent = "Question";
  divElement.append(headingElement);

  const questionElement = document.createElement("p");
  questionElement.textContent = card.question;
  divElement.append(questionElement);

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("show-answer");
  buttonElement.textContent = "Show Answer";
  divElement.append(buttonElement);

  const answerElement = document.createElement("p");
  answerElement.classList.add("answers", "hidden");
  answerElement.textContent = card.answer;
  divElement.append(answerElement);

  const ulElement = document.createElement("ul");
  ulElement.classList.add("subject-tags");
  divElement.append(ulElement);

  card.tags.forEach((tag) => {
    const liElement = document.createElement("li");
    liElement.textContent = tag;
    ulElement.append(liElement);
  });
  return divElement;
}

/* <div class="cards-content">
          <i class="far fa-bookmark bookmarks"></i>
          <h2>Question</h2>
          <p>How many programming languages currently exist?</p>
          <button class="show-answer">Show Answer</button>
          <p class="answers hidden">
            Round about 700 programmer languages exist.
          </p>
          <ul class="subject-tags">
            <li>#coding</li>
            <li>#nerd</li>
            <li>#developer</li>
          </ul>
        </div> */
