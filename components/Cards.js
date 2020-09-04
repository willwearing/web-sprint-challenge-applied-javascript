// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//create axios get request here (building function first)

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => {
    console.log(response);
    //data coming back as an object, need to create an array so I can loop through and add to the function
    const elementsData = Object.values(response.data.articles);
    //grab the main card container
    const cardsContainer = document.querySelector(".cards-container");
    //loop through array and loop again through each sub array
    elementsData.forEach((card) => {
      card.forEach((article) => {
        cardsContainer.appendChild(makeArticle(article));
      });
    });
  })
  .catch((error) => {
    console.log("articles error", error);
  });
//build component function for article cards

function makeArticle(object) {
  //create elements
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardSpan = document.createElement("span");

  //add classes
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");

  //add element content
  card.textContent = object.headline;
  cardImg.src = object.authorPhoto;
  cardSpan.textContent = `By ${object.authorName}`;

  //append the elements
  card.appendChild(cardHeadline);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardSpan);

  //add event listener for tracking article clicks
  card.addEventListener("click", () => {
    console.log(object.headline);
  });

  return card;
}
