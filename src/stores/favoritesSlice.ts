import { StateCreator } from "zustand";
import { Trago } from "../classes";

type FavoritesSliceType = {
    favoritos: Trago[],
    esFavorito: (trago: Trago) => boolean,
    agregarFavorito: (trago: Trago) => void
}

const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favoritos: [],
    
    esFavorito: (trago: Trago): boolean => {
        const resultado: Trago | undefined = get().favoritos.find( (t:Trago) => t.id === trago.id )
        if ( resultado ) {
            return true;
        } else {
            return false;
        }
    },

    agregarFavorito: (trago: Trago): void => {
        set((state)=>({favoritos: [...state.favoritos, trago]}));
    }

})

export {
    createFavoritesSlice,
    type FavoritesSliceType
}
