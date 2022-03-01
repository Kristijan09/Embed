import json from "../data.json";
import instagram from "../icons/instagram.svg";
import heart from "../icons/heart.svg";
import moment from "moment";

const app = document.getElementById("app");
const loadmore = document.getElementById("loadmore");
let counter = 1;

function createBox(el) {
  // Declare Variables

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const image = document.createElement("div");
  const description = document.createElement("p");
  const avatar = document.createElement("img");
  const name = document.createElement("p");
  const date = document.createElement("p");
  const logo = document.createElement("img");
  const footer = document.createElement("div");
  const likes = document.createElement("img");
  const dateNameWrapper = document.createElement("div");

  // Add Classes to elements

  wrapper.classList.add("wrapper");
  image.classList.add("image");
  header.classList.add("header");
  logo.classList.add("logo");
  wrapper.style.display = "none";

  // Append elements to their parents

  header.appendChild(avatar);
  header.appendChild(dateNameWrapper);
  dateNameWrapper.appendChild(name);
  dateNameWrapper.appendChild(date);
  header.appendChild(logo);
  wrapper.appendChild(header);
  wrapper.appendChild(image);
  wrapper.appendChild(description);
  wrapper.appendChild(footer);
  footer.appendChild(likes);

  // Add data to elements

  description.innerHTML = el.caption.substring(0, 100);
  image.src = el.image;
  avatar.src = el.profile_image;
  name.innerHTML = el.name;
  logo.src = instagram;
  image.style.background = `#f3f3f3 url(${el.image}) no-repeat center center`;
  date.innerHTML = moment(el.date).format("MMM Do YYYY");
  likes.src = heart;

  return wrapper;
}

json.forEach((element) => {
  const box = createBox(element);
  app.appendChild(box);
});

loadmore.addEventListener("click", () => {
  counter++;
  if (counter * 6 > document.querySelectorAll(".wrapper").length) {
    loadmore.style.display = "none";
  }
  console.log(counter);
  displayBoxes();
});

// Show boxes according to counter

function displayBoxes() {
  document.querySelectorAll(".wrapper").forEach((el, i) => {
    if (i < counter * 4) {
      el.style.display = "block";
    }
  });
}

displayBoxes();
