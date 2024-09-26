import { api } from "./api"

export const cadastroPizza = async (formData: FormData) => {
    const response = await api.post("/pizza", formData)
    return response.data
}

export const listarPizzas = async () => {
    const response = await api.get("/pizza")
    return response.data
}