import { products } from "./data.js";
import formatNumber from "./format.js";
import "./searcg.js"
const html = document.documentElement;
const themeTaggler = document.getElementById("theme-taggler");
const theme = localStorage.getItem("theme");

document.getElementById("year").textContent = new Date().getFullYear();

if (theme) {
  html.dataset.theme = theme;
  themeTaggler.checked = html.dataset.theme == "synthwave" ? true : false;
}

themeTaggler.addEventListener("click", () => {
  html.dataset.theme =
    html.dataset.theme == "cupcake" ? "synthwave" : "cupcake";
  localStorage.setItem("theme", html.dataset.theme);
  themeTaggler.checked = html.dataset.theme == "synthwave" ? true : false;
});

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);

  const {
    title,
    description: _description,
    thumbnail,
    price: _price,
    discountPercentage,
    rating: _rating,
    comments: _comments,
  } = product;

  const cardImage = clone.querySelector(".card-image");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const discountPrice = clone.querySelector(".discount-price");
  const comments = clone.querySelector(".comments");

  cardTitle.textContent = title;
  description.textContent = _description;
  cardImage.src = thumbnail;
  rating.textContent = `⭐${_rating}`;
  price.textContent = formatNumber(_price);
  discountPrice.textContent = formatNumber(_price, discountPercentage);
  comments.textContent = `(${_comments}comments)`;

  productsList.appendChild(clone);
});

const images = [
  "../../images/Discount.png",
  "../../images/sale.png",
  "../../images/hello-summer.png",
  "../../images/big-sale.png",
];

let index = 0;
const banner = document.getElementById("banner");

setInterval(() => {
  index = (index + 1) % images.length;
  banner.style.opacity = 0;
  setTimeout(() => {
    banner.src = images[index];
    banner.style.opacity = 1;
  }, 500);
}, 4000);


