import { products } from "./data.js";
const html = document.documentElement;
const themeTaggler = document.getElementById("theme-taggler");
const theme = localStorage.getItem("theme");
document.getElementById("year").textContent = new Date().getFullYear();

if (theme) {
  html.dataset.theme = theme;
  themeTaggler.checked = html.dataset.theme == "cyberpunk" ? true : false;

}

themeTaggler.addEventListener("click", () => {
  html.dataset.theme =
    html.dataset.theme == "cupcake" ? "cyberpunk" : "cupcake";
  localStorage.setItem("theme", html.dataset.theme);
  themeTaggler.checked = html.dataset.theme == "cyberpunk" ? true : false;
});

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);
  const cardImage = clone.querySelector(".card-image");
  const cardTitle = clone.querySelector(".card-title");
  const rating = clone.querySelector(".rating");
  const description = clone.querySelector(".description");
  const price = clone.querySelector(".price");
  const discountPrice = clone.querySelector(".discount-price");
  const comments = clone.querySelector(".comments");

  cardTitle.textContent = product.title;
  description.textContent = product.description;
  cardImage.src = product.thumbnail;
  rating.textContent = `⭐️${product.rating}`;
  price.textContent = `${product.price}$`;
  discountPrice.textContent = `${(
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2)}$`;
  comments.textContent = `(${product.comments}comments)`;

  productsList.appendChild(clone);
});