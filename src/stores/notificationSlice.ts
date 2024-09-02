import { StateCreator } from "zustand";


type Notificacion = {
    text: string,
    error: boolean,
    show: boolean
}

type NotificationSliceType = {
    notificacion: Notificacion
};

const createNotificationSlice: StateCreator<NotificationSliceType> = (set, get) => ({
    notificacion: {text: "", error: false, show: false}
    
});

export {
    createNotificationSlice,
    type NotificationSliceType
}