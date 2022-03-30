//--------------------------------SELECTORS--------------------------------//
    
//Header
const addRecipeHeaderBtn = document.querySelector('#addARecipeBtn');
const viewFavoritesBtn = document.querySelector('#viewFavorites');


//Body
const cookPotImg = document.querySelector('#cookPotImg');

const cookItUpBtn = document.querySelector('#cookItUpBtn');
const addFavoriteBtn = document.querySelector('#addFavoriteBtn');
const clearBtn = document.querySelector('#clearBtn');

const dishSuggestionSec = document.getElementById('dishSuggestionSec');
const mealContainer = document.querySelector('.mealContainer');


//Footer
const addRecipeFooterBtn = document.querySelector('#addNewRecipeBtn');


//---------------------------------ARRAYS---------------------------------//

let sideDishes = [
  'Mac N Cheese',
  'Side Salad',
  'Edamame',
  'Cambell\'s Soup',
  'Fingerling Potatoes',
  'A Single Carrot',
  'Crimini Mushrooms in Escargot Butter'
];

let entree = [
  '24oz Wagyu Ribeye with a wild berry & merlot reduc. sauce',
  'Cup Ramen',
  'Avocado Toast'
];

let dessert = [
  'Skittles',
  'Chocolate volcano',
  'Rocky Road Ice Cream',
  'Mochi',
  'An Orange'
];
let favoriteSides = [];
let favoriteEntrees = [];
let favoriteDesserts = [];
let tempSide;
let tempEntree;
let tempDessert;


//-----------------------------EVENT LISTENERS-----------------------------//
window.onload = favoriteMealRetrieve();


addRecipeHeaderBtn.addEventListener('click', showAddRecipeForm)
addRecipeFooterBtn.addEventListener('click', addNewRecipe);
cookItUpBtn.addEventListener('click', typeOfDishToCook);
clearBtn.addEventListener('click', clear);

addFavoriteBtn.addEventListener('click', favoriteAdd);
viewFavoritesBtn.addEventListener('click', viewFavoritesPage);

//--------------------------------FUNCTIONS--------------------------------//

//Header

function showAddRecipeForm() {
  document.querySelector('.copyright').classList.toggle('hidden');
  document.querySelector('.addRecipe').classList.toggle('hidden');
}

//Left container functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function suggestSide() {
  let suggest = sideDishes[getRandomIndex(sideDishes)];
  dishSuggestionSec.textContent = suggest;
  tempSide = suggest;
  tempEntree = undefined;
  tempDessert = undefined;
}

function suggestEntree() {
  let suggest = entree[getRandomIndex(entree)];
  dishSuggestionSec.textContent = suggest;
  tempSide = undefined;
  tempEntree = suggest;
  tempDessert = undefined;
}

function suggestDessert() {
  let suggest = dessert[getRandomIndex(dessert)];
  dishSuggestionSec.textContent = suggest;
  tempSide = undefined;
  tempEntree = undefined;
  tempDessert = suggest;
}

function suggestEntireMeal() {
  let mealEntree = entree[getRandomIndex(entree)];
  let mealSide =  sideDishes[getRandomIndex(sideDishes)];
  let mealDessert = dessert[getRandomIndex(dessert)];
  tempEntree = mealEntree;
  tempSide = mealSide;
  tempDessert = mealDessert;
  dishSuggestionSec.textContent = `${mealEntree} with a side of ${mealSide} and ${mealDessert} for dessert!`
}


function typeOfDishToCook() {
  let tempDishValue = document.querySelector('input[name="dishType"]:checked').value;
  cookPotOff();
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


//Right container functions

function cookPotOff() {
  mealContainer.classList.remove('hidden');
  cookPotImg.classList.add('hidden');
}

function clear() {
  mealContainer.classList.add('hidden');
  cookPotImg.classList.remove('hidden');
  tempSide = undefined;
  tempEntree = undefined;
  tempDessert = undefined;
}


//Favorites & storage
function favoriteAdd() {
  if (tempSide !== undefined && !favoriteSides.includes(tempSide)) {
    favoriteSides.push(tempSide);
  }
  if (tempEntree !== undefined && !favoriteEntrees.includes(tempEntree)) {
    favoriteEntrees.push(tempEntree);
  }
  if (tempDessert !== undefined && !favoriteDesserts.includes(tempDessert)) {
    favoriteDesserts.push(tempDessert);
  }
}

function favoriteMealStorage() {
  window.localStorage.setItem('favSides', JSON.stringify(favoriteSides));
  window.localStorage.setItem('favEntrees', JSON.stringify(favoriteEntrees));
  window.localStorage.setItem('favDesserts', JSON.stringify(favoriteDesserts));
}

function favoriteMealRetrieve() {
  let favSides = window.localStorage.getItem('favSides');
  let favEntrees = window.localStorage.getItem('favEntrees');
  let favDesserts = window.localStorage.getItem('favDesserts');
  let parseSides = JSON.parse(favSides);
  let parseEntrees = JSON.parse(favEntrees);
  let parseDesserts = JSON.parse(favDesserts);
  for (i = 0; i < parseSides.length; i++) {
    if (!favoriteSides.includes(parseSides[i])) {
      favoriteSides.push(parseSides[i]);
    }
  }
  for (j = 0; j < parseEntrees.length; j++) {
    if (!favoriteEntrees.includes(parseEntrees[j])) {
      favoriteEntrees.push(parseEntrees[j]);
    }
  }
  for (k = 0; k < parseDesserts.length; k++) {
    if (!favoriteDesserts.includes(parseDesserts[k])) {
      favoriteDesserts.push(parseDesserts[k]);
    }
  }    
}

function viewFavoritesPage() {
  window.location.href="./favorites.html"
}

//Footer -  add new recipe

function addNewRecipe() {
  let dishType = document.querySelector('input[name="recipeType"]').value;
  let dishName = document.querySelector('input[name="recipeName"]').value;
  let dishTypeLower = dishType.toLowerCase();
  if (dishTypeLower === 'side') {
    if (!sideDishes.includes(dishName)) {
      sideDishes.push(dishName);
      dishSuggestionSec.textContent = dishName;
      cookPotOff();
      alert(dishName + ' added!');
      return
    }
    alert('You already put that in, foo!');
    return
  }
  if (dishTypeLower === 'entree') {
    if (!entree.includes(dishName)) {
      entree.push(dishName);
      dishSuggestionSec.textContent = dishName;
      cookPotOff();
      alert(dishName + ' added!');
      return
    }
    alert('You already put that in, foo!');
    return
  }
  if (dishTypeLower === 'dessert') {
    if (!dessert.includes(dishName)) {
    dessert.push(dishName);
    dishSuggestionSec.textContent = dishName;
    cookPotOff();
    alert(dishName + ' added!');
    return
    }
    alert('You already put that in, foo!');
    return
  }
  alert('Whatchu tryna make?! Side, entree, or dessert?');
  return
}


//--------------------------------EXPORT--------------------------------//
// export function addNewRecipe();

