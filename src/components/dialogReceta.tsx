import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react"
import useAppStore from "../stores/useAppStore";
import { Ingrediente, Receta } from "../classes";

const DialogReceta = () => {

    const muestraDialogoReceta: boolean = useAppStore( (state) => state.muestraDialogoReceta )

    const closeDialogoReceta = useAppStore( (state) => state.closeDialogoReceta );
    const receta: Receta = useAppStore( (state) => state.receta );
    
    const esFavorito = useAppStore( (state) => state.esFavorito );
    const handleFavorito = useAppStore( (state) => state.handleFavorito );
    
    const favoritoHandle = () => {
        handleFavorito(receta.trago);
        closeDialogoReceta();
    }
    
    return(

        <Dialog
            open={muestraDialogoReceta}
            onClose={() => closeDialogoReceta() }
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-2 border bg-white p-6">
                    <DialogTitle className="font-extrabold text-center">{receta.trago.desc}</DialogTitle>
                    <img
                        src={receta.trago.imagen}
                        alt={`Imagen de ${receta.trago.desc}`}
                        className="mx-auto w-52"
                    />
                    <DialogTitle className="font-bold text-lg">Ingredientes y Cantidades</DialogTitle>
                    <div>
                        <ul className="list-disc">
                            {receta.ingredientes.map( (i: Ingrediente) => (
                                <li key={i.id}
                                    className="text-base font-base"
                                >{`${i.desc} - ${i.medida}`}</li>
                            ) )}
                        </ul>  
                    </div>
                    <DialogTitle className="font-bold text-lg">Instrucciones</DialogTitle>
                    <p className="text-sm">{receta.instrucciones}</p>
                    <div className="flex justify-between gap-4">
                        <button 
                            className="w-full rounded bg-gray-600 p-2 font-bold uppercase text-white shadow hover:bg-gray-500"
                            onClick={() => closeDialogoReceta()}
                        >Cerrar</button>
                        <button
                            className="w-full rounded bg-orange-600 p-2 font-bold uppercase text-white shadow hover:bg-orange-500" 
                            onClick={() => favoritoHandle()}
                        >{!esFavorito(receta.trago) ? "Agregar a favoritos" : "Eliminar Favorito"}</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default DialogReceta