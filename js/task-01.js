const itemEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemEl.length);

const categorieTitleEl = document.querySelectorAll(".item h2");

const categorieTitleAnimalsEl = categorieTitleEl[0].textContent;
console.log("Category: ", categorieTitleAnimalsEl);
const categorieAnimalsChieldEl = itemEl[0].childNodes;
const childrenAnimalsChieldEL = categorieAnimalsChieldEl[3].children;
console.log("Elements: ", childrenAnimalsChieldEL.length);

const categorieTitleProductEl = categorieTitleEl[1].textContent;
console.log("Category: ", categorieTitleProductEl);
const categorieProductChieldEl = itemEl[1].childNodes;
const childrenProductChieldEL = categorieProductChieldEl[3].children;
console.log("Elements: ", childrenProductChieldEL.length);

const categorieTitleTechnologEl = categorieTitleEl[2].textContent;
console.log("Category: ", categorieTitleTechnologEl);
const categorieTechnologChieldEl = itemEl[2].childNodes;
const childrenTechnologChieldEL = categorieTechnologChieldEl[3].children;
console.log("Elements: ", childrenTechnologChieldEL.length);
