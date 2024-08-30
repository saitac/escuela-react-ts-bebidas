import axios from "axios";
import { Categoria, Ingrediente, Receta, Trago } from "../classes";
import { SchemaCategories, SchemaDrinks, SchemaRecipes } from "../schemas";
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

const getReceta = async (trago: Trago) => {
    const uri: string = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${trago.id}`
    let receta: Receta = new Receta(trago,[],"");
    try {
        const {data: {drinks}} = await axios.get(uri);
        const result = SchemaRecipes.safeParse(drinks);

        if (result.success && result.data.length > 0) {

            let ingrediente: string | null = "";
            let medida: string | null = "";
            let ingres: Ingrediente[] = [];
            
            for(let i: number = 0; i < 16; i++){
                switch (i) {
                    case 1:
                        ingrediente = result.data[0]["strIngredient1"];
                        medida = result.data[0]["strMeasure1"];
                        break;
                    case 2:
                        ingrediente = result.data[0]["strIngredient2"];
                        medida = result.data[0]["strMeasure2"];
                        break;
                    case 3:
                        ingrediente = result.data[0]["strIngredient3"];
                        medida = result.data[0]["strMeasure3"];
                        break;
                    case 4:
                        ingrediente = result.data[0]["strIngredient4"];
                        medida = result.data[0]["strMeasure4"];
                        break;
                    case 5:
                        ingrediente = result.data[0]["strIngredient5"];
                        medida = result.data[0]["strMeasure5"];
                        break;
                    case 6:
                        ingrediente = result.data[0]["strIngredient6"];
                        medida = result.data[0]["strMeasure6"];
                        break;
                    case 7:
                        ingrediente = result.data[0]["strIngredient7"];
                        medida = result.data[0]["strMeasure7"];
                        break;
                    case 8:
                        ingrediente = result.data[0]["strIngredient8"];
                        medida = result.data[0]["strMeasure8"];
                        break;
                    case 9:
                        ingrediente = result.data[0]["strIngredient9"];
                        medida = result.data[0]["strMeasure9"];
                        break;
                    case 10:
                        ingrediente = result.data[0]["strIngredient10"];
                        medida = result.data[0]["strMeasure10"];
                        break;
                    case 11:
                        ingrediente = result.data[0]["strIngredient11"];
                        medida = result.data[0]["strMeasure11"];
                        break;
                    case 12:
                        ingrediente = result.data[0]["strIngredient12"];
                        medida = result.data[0]["strMeasure12"];
                        break;
                    case 13:
                        ingrediente = result.data[0]["strIngredient13"];
                        medida = result.data[0]["strMeasure13"];
                        break;
                    case 14:
                        ingrediente = result.data[0]["strIngredient14"];
                        medida = result.data[0]["strMeasure14"];
                        break;
                    case 15:
                        ingrediente = result.data[0]["strIngredient15"];
                        medida = result.data[0]["strMeasure15"];
                        break;
                }

                //ingrediente = result.data[0][`strIngredient${i}` as keyof SchemaRecipe];
                

                ingrediente = ingrediente !== null ? ingrediente : "";
                medida = medida !== null ? medida : "";

                if (ingrediente || medida) {
                    const ingre: Ingrediente = new Ingrediente(i, ingrediente, medida);
                    ingres.push(ingre);
                }
            }

            receta = {...receta,ingredientes: ingres, instrucciones: result.data[0].strInstructions}
        }
    } catch (error) {
        console.log(error);
    } finally {
        return receta;
    }
}

export {
    getCategorias,
    getTragos,
    getReceta
}