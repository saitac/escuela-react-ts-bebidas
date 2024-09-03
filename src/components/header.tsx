import { useEffect, useMemo, useState, ChangeEvent, FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom"
import useAppStore from "../stores/useAppStore";
import { Categoria } from "../classes";
import { filtroBusqueda } from "../types";

const Header = () => {

    const showNotification = useAppStore((state) => state.showNotification);

    const [filtroBusqueda, setFiltroBusqueda] = useState<filtroBusqueda>({
        ingredient: "",
        category: new Categoria()
    });

    const {pathname} = useLocation();
    const isHome = useMemo(()=> pathname === "/" , [pathname]);

    const getCategorias = useAppStore( (state) => state.getCategorias);
    const getTragos = useAppStore( (state) => state.getTragos )
    const categorias: Categoria[] = useAppStore( (state) => state.categorias)

    useEffect( () =>{
        getCategorias();
    }, []);

    const onChangeInputEventHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setFiltroBusqueda({...filtroBusqueda, ingredient: e.target.value});
    }

    const onChangeSelectEventHandle = (e: ChangeEvent<HTMLSelectElement>) => {
        setFiltroBusqueda({...filtroBusqueda, category: new Categoria(e.target.value, e.target.value)});
    }

    const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if ( !filtroBusqueda.ingredient || !filtroBusqueda.category.codigo ) {
            showNotification({text:"Todos los campos son obligatorios", error: true});
            return;
        }

        // Consultar las recetas
        getTragos(filtroBusqueda);

    }

    return(
        <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
            <div className="mx-auto container px-5 py-16">
                <div className=" flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo"/>
                    </div>
                    <nav
                        className="flex gap-4"
                    >
                        <NavLink 
                            className={({isActive}) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                            to="/"
                        >Inicio</NavLink>
                        <NavLink 
                            className={({isActive}) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                            to="/favoritos"
                        >Favoritos</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form
                        className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                        onSubmit={(e: FormEvent<HTMLFormElement>)=>onSubmitHandle(e)}
                    >
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingredient"
                                className=" block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingrediente</label>
                            <input
                                id="ingredient"
                                type="text"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o Ingrediente. Ejm. Vodka, Tequila, Café"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeInputEventHandle(e)}
                                value={filtroBusqueda.ingredient}
                            />
                        </div>

                        <div className="space-y-4">
                            <label 
                                htmlFor="category"
                                className=" block text-white uppercase font-extrabold text-lg"
                            >Categoría</label>
                            <select
                                id="category"
                                name="category"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                onChange={(e: ChangeEvent<HTMLSelectElement>) => onChangeSelectEventHandle(e)}
                                value={filtroBusqueda.category.codigo}
                            >
                                <option value="">-- Seleccione --</option>
                                {
                                    categorias.map( (c: Categoria) => (
                                        <option
                                            key={c.codigo}
                                            value={c.codigo}
                                        >{c.desc}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <input 
                            type="submit"
                            value="Buscar Recetas"
                            className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}

export default Header