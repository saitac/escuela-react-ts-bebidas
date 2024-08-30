import { StateCreator } from "zustand"
import { Categoria, Receta, Trago } from "../classes"
import { getCategorias, getReceta, getTragos } from "../services/recipeService"
import { filtroBusqueda } from "../types"

type RecipeSliceType = {
    categorias: Categoria[],
    tragos: Trago[],
    receta: Receta,
    muestraDialogoReceta: boolean,
    getCategorias: () => Promise<void>,
    getTragos: (filtro: filtroBusqueda) => Promise<void>,
    getReceta: (trago: Trago) => Promise<void>
    closeDialogoReceta: () => void
}

const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categorias: [],
    tragos: [],
    receta: new Receta(),
    muestraDialogoReceta: false,
    
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
        set(()=>({receta: ResultReceta, muestraDialogoReceta: true}));
    },

    closeDialogoReceta: () => {
        set(()=>({muestraDialogoReceta: false, receta: new Receta()}));
    }

})

export {
    createRecipeSlice,
    type RecipeSliceType
}