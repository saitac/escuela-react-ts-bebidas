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
            <div className="overflow-hidden">
                <img className="rounded-t-lg hover:scale-125 transition-transform hover: rotate-2" src={trago.imagen} alt="" />
            </div>
            <p
                className="font-bold p-3 truncate"
            >{trago.desc}</p>
            <div className="p-3">
                <button type="button" value="" 
                    className="cursor-pointer bg-orange-400 hover:bg-orange-500 text-white font-bold w-full p-2"
                >Ver receta</button>
            </div>
        </div>
    )
}

export default Card