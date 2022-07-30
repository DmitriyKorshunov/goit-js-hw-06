const itemEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemEl.length);

const categorieTitleEl = document.querySelectorAll(".item h2");

const categorieTitleTextEl0 = categorieTitleEl[0].textContent;
console.log("Category: ", categorieTitleTextEl0);
const categorieAnimalsChieldEl = itemEl[0].childNodes;
const childrenAnimalsChieldEL = categorieAnimalsChieldEl[3].children;
console.log("Elements: ", childrenAnimalsChieldEL.length);

const categorieTitle1TextEl = categorieTitleEl[1].textContent;
console.log("Category: ", categorieTitle1TextEl);
const categorieProductChieldEl = itemEl[1].childNodes;
const childrenProductChieldEL = categorieProductChieldEl[3].children;
console.log("Elements: ", childrenProductChieldEL.length);

const categorieTitle2TextEl = categorieTitleEl[2].textContent;
console.log("Category: ", categorieTitle2TextEl);
const categorieTechnologChieldEl = itemEl[2].childNodes;
const childrenTechnologChieldEL = categorieTechnologChieldEl[3].children;
console.log("Elements: ", childrenTechnologChieldEL.length);
