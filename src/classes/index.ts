import { IntCategoria, IntIngrediente, IntReceta, IntTrago } from "../interfaces";

class Categoria implements IntCategoria {
    codigo: string;
    desc: string;

    constructor(codigo: string = "", desc: string = ""){
        this.codigo = codigo
        this.desc = desc
    }

}

class Trago implements IntTrago {
    id: string;
    desc: string;
    imagen: string;

    constructor(id: string = "", desc: string = "", imagen: string = "") {
        this.id = id;
        this.desc = desc;
        this.imagen = imagen
    }
}

class Ingrediente implements IntIngrediente {
    desc: string;
    medida: string;

    constructor(desc: string = "", medida: string = ""){
        this.desc = desc;
        this.medida = medida
    }
}

class Receta implements IntReceta {
    trago: Trago;
    ingredientes: Ingrediente[];
    instrucciones: string;

    constructor(trago: Trago = new Trago(),ingredientes: Ingrediente[] = [], instrucciones: string = ""){
        this.trago = trago;
        this.ingredientes = ingredientes
        this.instrucciones = instrucciones
    }
}

export {
    Categoria,
    Trago,
    Ingrediente,
    Receta
}