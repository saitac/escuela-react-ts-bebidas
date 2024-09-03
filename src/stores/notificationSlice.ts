import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";


type Notificacion = {
    text: string,
    error: boolean,
    show: boolean
}

type NotificationSliceType = {
    notificacion: Notificacion,
    showNotification: (payload: Pick<Notificacion, "text" | "error">) => void,
    hideNotification: () => void
};

const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notificacion: {text: "", error: false, show: false},
    showNotification: (payload) => {
        set({
            notificacion: {text: payload.text, error: payload.error, show: true}
        });
        setTimeout(() => {
            get().hideNotification();
        }, 5000);
    },
    hideNotification: () => {
        set({notificacion: {text:"", error:false, show:false}});
    }
});

export {
    createNotificationSlice,
    type NotificationSliceType
}