import { StateCreator } from "zustand";
import { Trago } from "../classes";

type FavoritesSliceType = {
    favoritos: Trago[]
}

const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set) => ({
    favoritos: []
})

export {
    createFavoritesSlice,
    type FavoritesSliceType
}
