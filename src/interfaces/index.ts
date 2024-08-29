interface IntCategoria {
    codigo: string,
    desc: string
}

interface IntTrago {
    id: string,
    desc: string,
    imagen: string
}

interface IntIngrediente {
    desc: string,
    medida: string
}

interface IntReceta {
    trago: IntTrago,
    ingredientes: IntIngrediente[],
    instrucciones: string
}

export {
    type IntCategoria,
    type IntTrago,
    type IntReceta,
    type IntIngrediente
    
}