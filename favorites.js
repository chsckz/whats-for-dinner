//-------------------------------IMPORT------------------------------------//
// import { addNewRecipe } from './main';

//------------------------------SELECTORS----------------------------------//
const homeBtn = document.querySelector('#homeBtn')
const addNewRecipeBtn = document.querySelector('#addNewRecipeBtn');
const favoriteSidesUl = document.querySelector('.favoriteSidesSec');
const favoriteEntreesUl = document.querySelector('.favoriteEntreesSec');
const favoriteDessertsUl = document.querySelector('.favoriteDessertsSec');


//--------------------------------ARRAYS-----------------------------------//
let favoriteSides = [];
let favoriteEntrees = [];
let favoriteDesserts = [];


//---------------------------EVENT LISTENERS-------------------------------//
window.onload = favoriteMealRetrieve();
window.onload = displayFavorites();


homeBtn.addEventListener('click', goHome);







//------------------------------FUNCTIONS----------------------------------//

//On Load
function displayFavorites() {
  favoriteSides.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    favoriteSidesUl.appendChild(li);
  });
  favoriteEntrees.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    favoriteEntreesUl.appendChild(li);
  });
  favoriteDesserts.forEach((item) => {
    let li = document.createElement('li');
    li.innerText = item;
    favoriteDessertsUl.appendChild(li);
  });
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


//Buttons

function goHome() {
  window.location.href="./index.html"
}

// function 
