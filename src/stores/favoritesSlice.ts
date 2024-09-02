import { StateCreator } from "zustand";
import { Trago } from "../classes";

type FavoritesSliceType = {
    favoritos: Trago[],
    esFavorito: (trago: Trago) => boolean,
    handleFavorito: (trago: Trago) => void,
    loadFromStorage: () => void
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

    handleFavorito: (trago: Trago): void => {
        if ( !get().esFavorito(trago) ) {
            set((state)=>({favoritos: [...state.favoritos, trago]}));
        } else {
            const newFavoritos: Trago[] = get().favoritos.filter( (t: Trago) => t.id !== trago.id );
            set(()=>({favoritos: newFavoritos}));
        }
        localStorage.setItem("favoritos", JSON.stringify(get().favoritos));
    },

    loadFromStorage: (): void => {
        const storageFavoritos: string | null = localStorage.getItem("favoritos");
        if ( storageFavoritos ) {
            set({favoritos: JSON.parse(storageFavoritos)});
        }
    }

})

export {
    createFavoritesSlice,
    type FavoritesSliceType
}
