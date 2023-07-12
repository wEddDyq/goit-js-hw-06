// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const listItemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${listItemsEl.length}`);

const ulCategoriesArray = listItemsEl.forEach(el => {
 
    // console.log(`Category: ${el.firstElementChild.textContent}`);
    // console.log(`Elements: ${el.lastElementChild.children.length}`);

    console.log(`Category: ${el.querySelectorAll("h2")[0].textContent}`);
    console.log(`Elements: ${el.querySelectorAll("li").length}`); 
});



