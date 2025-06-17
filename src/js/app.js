import { products } from "./data.js";
import {renderUi} from "./renderUi.js"
import "./searcg.js";
const priceSort = document.getElementById("price-sort");
const html = document.documentElement;
const themeTaggler = document.getElementById("theme-taggler");
const theme = localStorage.getItem("theme");


renderUi(products)

priceSort.addEventListener("change", (e) => {
  const price =
    e.target.options[e.target.selectedIndex].getAttribute("data-price");
  const productsForSorting = [...products];
  if (price == "low") {
   const newSort= productsForSorting.sort((a, b) => {
    return  a.price - b.price;
    });
    renderUi(newSort)
  }else if(price=="hight"){
    const newSort= productsForSorting.sort((a, b) => {
      return  b.price - a.price;
      });
      renderUi(newSort)
  }
});

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