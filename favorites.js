//-------------------------------IMPORT------------------------------------//
// import { addNewRecipe } from './main';

//------------------------------SELECTORS----------------------------------//
const homeBtn = document.querySelector('#homeBtn')
const addNewRecipeBtn = document.querySelector('#addNewRecipeBtn');
const favoriteSidesSec = document.querySelector('.favoriteSidesSec');
const favoriteEntreesSec = document.querySelector('.favoriteEntreesSec');
const favoriteDessertsSec = document.querySelector('.favoriteDessertsSec');



//---------------------------EVENT LISTENERS-------------------------------//
homeBtn.addEventListener('click', goHome);







//------------------------------FUNCTIONS----------------------------------//
function goHome() {
  window.location.href="./index.html"
}

