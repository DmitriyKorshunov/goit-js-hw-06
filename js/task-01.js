const itemEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemEl.length);

const categorieTitleEl = document.querySelectorAll(".item h2");

const categorieTitle0TextEl = categorieTitleEl[0].textContent;
console.log("Category: ", categorieTitle0TextEl);
const cat1El = document.querySelectorAll(".js-item-animals li");
console.log("Elements: ", cat1El.length);

const categorieTitle1TextEl = categorieTitleEl[1].textContent;
console.log("Category: ", categorieTitle1TextEl);
const cat2El = document.querySelectorAll(".js-item-products li");
console.log("Elements: ", cat2El.length);

const categorieTitle2TextEl = categorieTitleEl[2].textContent;
console.log("Category: ", categorieTitle2TextEl);
const cat3El = document.querySelectorAll(".js-item-technologies li");
console.log("Elements: ", cat3El.length);
