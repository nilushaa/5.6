const searchEl = document.getElementById("search");
const noResultEl = document.getElementById("no-result");

searchEl.addEventListener("input", () => {
  const titles = document.querySelectorAll(".card-title");
  const searchText = searchEl.value.toLowerCase();
  let hasVisible = false;

  titles.forEach((title) => {
    const card = title.closest(".card");

    if (title.textContent.toLowerCase().includes(searchText)) {
      card.classList.remove("hidden");
      hasVisible = true;
    } else {
      card.classList.add("hidden");
    }
  });

  noResultEl.classList.toggle("hidden", hasVisible); 
});
