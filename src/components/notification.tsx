import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import useAppStore from "../stores/useAppStore";

const Notification = () => {

    const notificacion = useAppStore( (state) => state.notificacion );
    const hideNotification = useAppStore( (state) => state.hideNotification );

    return(
        <>
            <Dialog open={notificacion.show} onClose={() => hideNotification() } className="relative z-50 bg-slate-400">
                <div className="bg-white text-black rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 
                fixed top-4 right-6 flex justify-between w-full max-w-xs overflow-hidden p-4">
                    <div className="flex flex-row">
                        <div>
                            {notificacion.error ? (
                                <XCircleIcon className="h-6 w-6 text-red-400"/>
                            ) : (
                                <CheckCircleIcon className="h-6 w-6 text-green-400"/>
                            )}
                            
                        </div>
                        <div className="pl-2">
                            <p className="text-sm font-medium text-gray-900">Notificación</p>
                            <p className="mt-1 text-sm text-gray-500">{notificacion.text}</p>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={() => hideNotification()}
                        >
                            <span className="sr-only">Cerrar</span>
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Notification