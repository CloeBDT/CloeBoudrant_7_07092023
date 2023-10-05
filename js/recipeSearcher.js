import { recipes } from "../data/recipes";

export function recipeSearcher (letters) {
    let result;
    if(letters.length > 2 || letters.length === 0) {
        result = recipes.filter((unit) => JSON.stringify(unit).toLowerCase().includes(letters.toLowerCase()))
    }
    return result;
};



