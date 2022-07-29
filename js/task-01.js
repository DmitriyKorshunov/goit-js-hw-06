const itemEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemEl.length);
const categorieTitleEl = document.querySelectorAll(".item h2");
console.log(categorieTitleEl);
const categorieTitle0TextEl = categorieTitleEl[0].textContent;
console.log("Category: ", categorieTitle0TextEl);

console.log("Elements: ");
const categorieTitle1TextEl = categorieTitleEl[1].textContent;
console.log("Category: ", categorieTitle1TextEl);
console.log("Elements: ");
const categorieTitle2TextEl = categorieTitleEl[2].textContent;
console.log("Category: ", categorieTitle2TextEl);
console.log("Elements: ");
