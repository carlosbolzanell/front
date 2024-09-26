export interface Produto{
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

export interface Pizza extends Produto{
    tipo: string;
    tamanho: string;   
}