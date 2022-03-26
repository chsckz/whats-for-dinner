//Variables
const addRecipeBtn = document.getElementById('addRecipeBtn');
const letsCookBtn = document.getElementById('letsCookBtn');
const insertDish = document.getElementById('insertDish');


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

//Event identifiers





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