import { StateCreator } from "zustand"
import { Categoria, Receta, Trago } from "../classes"
import { getCategorias, getReceta, getTragos } from "../services/recipeService"
import { filtroBusqueda } from "../types"

type RecipeSliceType = {
    categorias: Categoria[],
    tragos: Trago[],
    receta: Receta
    getCategorias: () => Promise<void>,
    getTragos: (filtro: filtroBusqueda) => Promise<void>
    getReceta: (trago: Trago) => Promise<void>
}

const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categorias: [],
    tragos: [],
    receta: new Receta(),
    
    getCategorias: async () => {
        const Resultcategorias: Categoria[] = await getCategorias();
        set(() => ({categorias: Resultcategorias}));
    },

    getTragos: async (filtro: filtroBusqueda) => {
        const ResultTragos: Trago[] = await getTragos(filtro);
        set(() => ({tragos: ResultTragos}));
    },

    getReceta: async (trago: Trago) => {
        const ResultReceta: Receta = await getReceta(trago);
        set(()=>({receta: ResultReceta}));
    }
})

export {
    createRecipeSlice,
    type RecipeSliceType
}