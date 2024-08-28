import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {createRecipeSlice, RecipeSliceType} from "./recipeSlice";


const useAppStore = create<RecipeSliceType>()( devtools( (...a) => ({
    ...createRecipeSlice(...a)
})));

export default useAppStore