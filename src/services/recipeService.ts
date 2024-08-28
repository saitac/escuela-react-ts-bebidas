import axios from "axios";
import { Categoria } from "../classes";
import { SchemaCategories } from "../schemas";

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

export {
    getCategorias
}