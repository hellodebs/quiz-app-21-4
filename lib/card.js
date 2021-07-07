export function createCardComponent(card) {
  //create divElement
  const divElement = document.createElement("div");
  divElement.classList.add("cards-content");
  const bookmarkElement = document.createElement("i");
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
  // create buttonElement
  const buttonElement = document.createElement("button");
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
