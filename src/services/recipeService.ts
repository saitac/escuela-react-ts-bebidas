import axios from "axios";
import { Categoria, Trago } from "../classes";
import { SchemaCategories, SchemaDrinks } from "../schemas";
import { filtroBusqueda } from "../types";

const getCategorias = async (): Promise<Categoria[]> => {
    const uri: string = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    let categorias: Categoria[] = [];
    try {

        const {data: {drinks}} = await axios.get(uri);
        const result = SchemaCategories.safeParse(drinks);

        if (result.success) {
            categorias = result.data.map( d => new Categoria(d.strCategory, d.strCategory) );
        }

    } catch (error) {
        console.log(error);
    } finally {
        return categorias
    }
}

const getTragos = async (filtro: filtroBusqueda): Promise<Trago[]> => {
    const uri: string = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filtro.category.codigo}&i=${filtro.ingredient}`;
    let tragos: Trago[] = [];
    try {
        const {data: {drinks}} = await axios.get(uri);
        const result = SchemaDrinks.safeParse(drinks)
        if ( result.success ) {
            tragos = result.data.map( d => new Trago(d.idDrink, d.strDrink, d.strDrinkThumb) );
        }
    } catch (error) {
        console.log(error);   
    } finally {
        return tragos;
    }
}

export {
    getCategorias,
    getTragos
}