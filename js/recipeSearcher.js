import { recipes } from "../data/recipes";

export function recipeSearcher (letters) {
    if(letters.length > 2 || letters.length === 0) {
       return recipes.filter((unit) => JSON.stringify(unit).toLowerCase().includes(letters.toLowerCase()))
    }
};



