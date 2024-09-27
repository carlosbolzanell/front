import { api } from "./api"

export const cadastroPizza = async (formData: FormData) => {
    const response = await api.post("/pizza", formData)
    return response.data
}

export const listarPizzas = async (tamanho: string) => {
    const response = await api.get("/pizza?tamanho="+tamanho)
    return response.data
}