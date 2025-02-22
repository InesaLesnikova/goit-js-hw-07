const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2");
  console.log("Category:", categoryName.textContent);
  const categoryEl = category.querySelectorAll("li");
  console.log("Elements:", categoryEl.length);
});
