import { IntCategoria } from "../interfaces";

class Categoria implements IntCategoria {
    codigo: string;
    desc: string;

    constructor(codigo: string = "", desc: string = ""){
        this.codigo = codigo
        this.desc = desc
    }

}

export {
    Categoria
}