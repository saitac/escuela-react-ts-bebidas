import { StateCreator } from "zustand"
import { Categoria, Trago } from "../classes"
import { getCategorias, getTragos } from "../services/recipeService"
import { filtroBusqueda } from "../types"

type RecipeSliceType = {
    categorias: Categoria[],
    tragos: Trago[],
    getCategorias: () => Promise<void>,
    getTragos: (filtro: filtroBusqueda) => Promise<void>
}

const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categorias: [],
    tragos: [],
    
    getCategorias: async () => {
        const Resultcategorias: Categoria[] = await getCategorias();
        set(() => ({categorias: Resultcategorias}));
    },

    getTragos: async (filtro: filtroBusqueda) => {
        const ResultTragos: Trago[] = await getTragos(filtro);
        set(() => ({tragos: ResultTragos}));
    }
})

export {
    createRecipeSlice,
    type RecipeSliceType
}