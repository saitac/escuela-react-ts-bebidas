import { StateCreator } from "zustand"
import { Categoria } from "../classes"
import { getCategorias } from "../services/recipeService"

type RecipeSliceType = {
    categorias: Categoria[],
    getCategorias: () => Promise<void>
}

const createRecipeSlice: StateCreator<RecipeSliceType> = (get, set) => ({
    categorias: [],
    
    getCategorias: async () => {
        const Resultcategorias: Categoria[] = await getCategorias();
        //set( (state) => ({categorias: []}) );

        
        console.log(Resultcategorias)
        

    }
})

export {
    createRecipeSlice,
    type RecipeSliceType
}