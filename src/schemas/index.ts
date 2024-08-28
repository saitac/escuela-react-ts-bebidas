import { z } from "zod";

const SchemaCategory = z.object({
    strCategory: z.string()
});

const SchemaCategories = z.array(SchemaCategory);

export {
    SchemaCategories
}