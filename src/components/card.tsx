import { Trago } from "../classes"

type CardProps = {
    trago: Trago
}

const Card = ({trago}: CardProps) => {
    //https://flowbite.com/docs/components/card/
    return(
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
        >
            <img className="rounded-t-lg" src={trago.imagen} alt="" />
            <p
                className="font-bold p-3"
            >{trago.desc}</p>
            <div className="p-3">
                <input type="button" value="Ver receta" 
                    className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold w-full p-2"
                />
            </div>
        </div>
    )
}

export default Card