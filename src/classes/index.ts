import { IntCategoria, IntTrago } from "../interfaces";

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

export {
    Categoria,
    Trago
}