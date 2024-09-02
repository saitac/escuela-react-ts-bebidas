import { useMemo } from "react";
import useAppStore from "../stores/useAppStore"
import { Trago } from "../classes";
import Card from "../components/card";

const Favoritos = () => {

    const favoritos = useAppStore( (state) => state.favoritos );
    const hasFavoritos: boolean = useMemo( () => favoritos.length > 0, [favoritos] )

    return(
        <section>
            {!hasFavoritos ? 
                (<p className="my-10 text-center text-2xl">Los favoritos se mostrarán aquí</p>):
                <>
                    <h1 className="text-6xl pb-6">Favoritos</h1>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 my-10">
                        {
                            favoritos.map( (t: Trago) => (<Card key={t.id} trago={t} />) )
                        }
                    </div>
                </>
            }
            
        </section>
    )
}

export default Favoritos