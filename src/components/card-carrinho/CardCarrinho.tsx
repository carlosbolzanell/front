import { ProdutosQuantidade } from "@/types/Usuario";
import React from "react";
import Quantidade from "../quantidade/Quantidade";

export interface CardCarrinhoProps {
  produto: ProdutosQuantidade;
  setAtualizar: React.Dispatch<React.SetStateAction<number>>;
}

export default function CardCarrinho({ produto, setAtualizar }: CardCarrinhoProps) {
  return (
    <div className="border border-gray-500 rounded flex justify-between px-2 h-24 items-center font-poppins">
      <div className="flex items-center gap-5 w-80">
        <div>
          <img
            src={produto.produto.imagem}
            alt=""
            className="rounded w-32 h-20 object-cover"
          />
        </div>
        <div>
          <p>{produto.produto.nome}</p>
        </div>
      </div>
      <div>
        <Quantidade quantidade={produto.quantidade} id={produto.id} setAtualizar={setAtualizar} />
      </div>
      <div className="w-16">R${produto.produto.preco * produto.quantidade}</div>
    </div>
  );
}
