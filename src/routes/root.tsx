import { useMemo } from "react";
import { Trago } from "../classes";
import Card from "../components/card";
import useAppStore from "../stores/useAppStore"

const Root = () => {

    const tragos: Trago[] = useAppStore((state)=>state.tragos);
    const hasTragos = useMemo(() => tragos.length > 0 ,[tragos]);

    console.log(hasTragos);

    return(
        <section>
            {!hasTragos ? 
                (<p className="my-10 text-center text-2xl">No hay resultados aún, utiliza el formulario para buscar tragos</p>):
                <>
                    <h1 className="text-6xl pb-6">Tragos</h1>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 my-10">
                        {
                            tragos.map( (t: Trago) => (<Card key={t.id} trago={t} />) )
                        }
                    </div>
                </>
            }
            
        </section>
    )
}

export default Root