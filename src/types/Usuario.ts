import { Produto } from "./pizza"

export interface Usuario {
    id: number
    nome: string
    usuario: string
    email: string
}

export interface Carrinho{
    id: number
    quantidade: number
    nomeUsuario: string
    produtos: ProdutosQuantidade[]
}

export interface ProdutosQuantidade{
    id: number
    produto: Produto
    quantidade: number
}