import { z } from "zod";

const SchemaCategory = z.object({
    strCategory: z.string()
});

const SchemaCategories = z.array(SchemaCategory);

const SchemaDrink = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

const SchemaDrinks = z.array(SchemaDrink)

export {
    SchemaCategories,
    SchemaDrinks
}