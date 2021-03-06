/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//grab carousel
const carouselContainer = document.querySelector(".carousel-container");

//make carousel component function

function carouselMaker() {
  //create elements

  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const imgOne = document.createElement("img");
  const imgTwo = document.createElement("img");
  const imgThree = document.createElement("img");
  const imgFour = document.createElement("img");
  const rightButton = document.createElement("div");

  //add class names
  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  imgOne.classList.add("img");
  imgTwo.classList.add("img");
  imgThree.classList.add("img");
  imgFour.classList.add("img");
  rightButton.classList.add("right-button");

  //add content

  leftButton.textContent = "Left";
  imgOne.setAttribute(
    "src",
    "https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg"
  );
  imgTwo.setAttribute(
    "src",
    "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg"
  );
  imgThree.setAttribute(
    "src",
    "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg"
  );
  imgFour.setAttribute(
    "src",
    "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg"
  );
  rightButton.textContent = "Right";

  //append elements

  carousel.appendChild(leftButton);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rightButton);

  // console.log(carousel);
  return carousel;
}

carouselContainer.append(carouselMaker());
