const productsCounte = document.getElementById("products-counter");

let products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];
function calculate() {
  let totalAmount = 0;
  products.forEach((p) => {
    totalAmount += p.amount;
  });
  return totalAmount;
}

if (products.length) {
  productsCounte.textContent = calculate();
  calculate();
}

export function addBasket(product) {
  const item = products.find((p) => p.id == product.id);
  if (item) {
    item.amount += 1;
  } else {
    products.push(product);
  }

  localStorage.setItem("products", JSON.stringify(products));
  productsCounte.textContent = calculate();
  products = JSON.parse(localStorage.getItem("products"));
}
