import { create } from "zustand";
import {createRecipeSlice, RecipeSliceType} from "./recipeSlice";


const useAppStore = create<RecipeSliceType>()( (...a) => ({
    ...createRecipeSlice(...a)
}));

export default useAppStore