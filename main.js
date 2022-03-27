//Selectors
const addRecipeBtn = document.getElementById('addRecipeBtn');
const letsCookBtn = document.getElementById('letsCookBtn');
const clearBtn = document.getElementById('clearBtn');

const dishType = document.getElementsByTagName('dishType');
const insertDish = document.getElementById('insertDish');
const cookPotImg = document.querySelector('#cookPotImg');

const mealContainer = document.querySelector('.mealContainer');

//Recipe storage arrays
let sideDishes = [
  'Mac N Cheese',
  'Side Salad',
  'Edamame',
  'Cambell\'s Soup',
  'Fingerling Potatoes',
  'A Single Carrot',
  'Crimini Mushrooms with Escargot Butter'
];
let entree = [
  '24oz Wagyu Ribeye - served with a wild berry & merlot reduction sauce',
  'Cup Ramen',
  'Avocado Toast'
];
let dessert = [
  'Skittles',
  'Chocolate volcano',
  'Pint of Rocky Road Ice Cream',
  'Mochi',
  'An Orange'
];
let entireMeal; //random pick from 1 of each above array

//Event listeners
letsCookBtn.addEventListener('click', dishInputValue);
clearBtn.addEventListener('click', clear);



//Functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function suggestSide() {
  let suggest = sideDishes[getRandomIndex(sideDishes)];
  insertDish.textContent = suggest;
}

function suggestEntree() {
  let suggest = entree[getRandomIndex(entree)];
  insertDish.textContent = suggest;
}

function suggestDessert() {
  let suggest = dessert[getRandomIndex(dessert)];
  insertDish.textContent = suggest;
}

function suggestEntireMeal() {
  let tempEntree = (entree[getRandomIndex(entree)]);
  let tempSide =  sideDishes[getRandomIndex(sideDishes)];
  let tempDessert = dessert[getRandomIndex(dessert)];
  insertDish.textContent = `${tempEntree} with a side of ${tempSide} and ${tempDessert} for dessert!`
}

function dishInputValue() {
  let tempDishValue = document.querySelector('input[name="dishType"]:checked').value;
  mealContainer.classList.remove('hidden');
  cookPotImg.classList.add('hidden');
  if (tempDishValue === 'side') {
    suggestSide();
  }
  if (tempDishValue === 'entree') {
    suggestEntree();
  }
  if (tempDishValue === 'dessert') {
    suggestDessert();
  }
  if (tempDishValue === 'entireMeal') {
    suggestEntireMeal();
  }
}

function clear() {
  mealContainer.classList.add('hidden');
  cookPotImg.classList.remove('hidden')
}
