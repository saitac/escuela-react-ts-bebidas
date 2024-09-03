import { StateCreator } from "zustand";
import { Trago } from "../classes";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";

type FavoritesSliceType = {
    favoritos: Trago[],
    esFavorito: (trago: Trago) => boolean,
    handleFavorito: (trago: Trago) => void,
    loadFromStorage: () => void
}

const createFavoritesSlice: StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
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
            createNotificationSlice(set, get, api).showNotification({
                text: "Se agregó a favoritos",
                error: false
            });
        } else {
            const newFavoritos: Trago[] = get().favoritos.filter( (t: Trago) => t.id !== trago.id );
            set(()=>({favoritos: newFavoritos}));
            createNotificationSlice(set, get, api).showNotification({
                text: "Se eliminó de favoritos",
                error: false
            });
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
