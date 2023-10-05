import { generateDataElement } from "./assets/helpers";
import { recipes } from "./data/recipes";
import { recipeSearcher } from "./js/recipeSearcher";

const recipe = recipes[0];
const recipeSection = document.querySelector("#recettes");
function createRecipe(recipeData) {
  const article = document.createElement("article");
  const divImg = document.createElement("div");
  const img = document.createElement("img");
  const time = document.createElement("p");
  const divRecipe = document.createElement("div");
  const divh3 = document.createElement("div");
  const h3 = document.createElement("h3");
  const divInstructions = document.createElement("div");
  const h4Recette = document.createElement("h4");
  const pRecette = document.createElement("p");
  const divIngredients = document.createElement("div");
  const h4Ingredients = document.createElement("h4");
  const divIngredientsGrid = document.createElement("div");

  article.className = "h-[45.688rem] w-[23.75rem] rounded-2xl flex flex-col items-center bg-white";
  divImg.className = "image h-64 w-[23.75rem] bg-secondary rounded-t-2xl relative";
  img.className = "image__img h-64 w-[23.75rem] object-cover rounded-t-2xl";
  time.className = "temps bg-primary rounded-xl text-secondary font-manrope text-center absolute top-5 right-5 py-1 px-3.5";
  h3.className = "font-anton text-base leading-relaxed ";
  h4Recette.className = "font-manrope text-xs leading-relaxed text-quaternary font-bold mb-2";
  pRecette.className = "font-manrope text-sm text-secondary line-clamp-4";
  h4Ingredients.className = "font-manrope text-xs leading-relaxed text-quaternary font-bold mb-2";
  divRecipe.className = "h-80 w-80 flex flex-col justify-evenly";
  divIngredientsGrid.className = "grid grid-cols-2";
  divh3.className = "h-10 flex items-center";

  article.appendChild(divImg);
  article.appendChild(divRecipe);
  divImg.appendChild(img);
  divImg.appendChild(time);
  divRecipe.appendChild(divh3);
  divh3.appendChild(h3);
  divRecipe.appendChild(divInstructions);
  divRecipe.appendChild(divIngredients);
  divInstructions.appendChild(h4Recette);
  divInstructions.appendChild(pRecette);
  divIngredients.appendChild(h4Ingredients);
  divIngredients.appendChild(divIngredientsGrid);

  img.setAttribute("src", `./assets/recipePictures/${recipeData.image}`);
  time.textContent = recipeData.time + "min";

  h3.textContent = recipeData.name;
  h4Recette.textContent = "RECETTE";
  pRecette.textContent = recipeData.description;
  h4Ingredients.textContent = "INGRÉDIENTS";
  recipeData.ingredients.map((ingredients) => divIngredientsGrid.appendChild(generateDataElement(ingredients)));

  return article;
}

recipes.map((recipe) => recipeSection.appendChild(createRecipe(recipe)));

// FAUSSE BARRE INPUT
const termedeRecherche = "Poisson";
// APPEL DE LA FONCTION DE TRI
const recettesAafficher =  recipeSearcher(termedeRecherche);
// AFFICHAGE EN CONSOLE DU RESULTAT
console.log(recettesAafficher)
