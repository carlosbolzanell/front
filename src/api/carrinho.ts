import { api } from "./api"

export const addCarrinho = async (idProduto: number, quantidade: number) => {
    const response = await api.post(`/carrinho/adicionar?idProduto=${idProduto}&quantidade=${quantidade}`)
    return response.data
}

export const addQuantidade = async (idProduto: number) => {
    const response = await api.put(`/carrinho/adicionarQuantidade?idProduto=${idProduto}`)
    return response.data
}

export const removeQuantidade = async (idProduto: number) => {
    const response = await api.put(`/carrinho/removerQuantidade?idProduto=${idProduto}`)
    return response.data
}

export const removeProduto = async (idProduto: number) => {
    const response = await api.delete(`/carrinho/remover?idQuantidadeProduto=${idProduto}`)
    return response.data
}

export const limparCarrinho = async () => {
    const response = await api.delete(`/carrinho/limpar`)
    return response.data
}