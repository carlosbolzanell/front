import { Pizza } from "@/types/pizza";
import { FiShoppingCart } from "react-icons/fi";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { addCarrinho } from "@/api/carrinho";

interface CardProps {
  pizza: Pizza;
}

export default function CardPizza({ pizza }: CardProps) {

  const { toast } = useToast();

  const adicionarCarrinho = async () => {
    try{
      await addCarrinho(pizza.id, 1);
      toast({title: "Adicionado ao carrinho", description: "Produto adicionado com sucesso", variant: "success"});
    }catch(error){
      console.log("Erro ao adicionar ao carrinho");
      toast({
        title: "Erro ao adicionar ao carrinho",
        description: "Tente novamente mais tarde",
        variant: "destructive"
      });
    }
  };

  return (
    <div key={pizza.id} className="border border-black flex rounded">
      <div className="">
        <img
          src={pizza.imagem}
          alt={pizza.nome}
          className="rounded-ss w-56 h-40 object-cover"
        />
      </div>
      <div className="w-72 font-poppins px-3 py-2 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold">{pizza.nome}</h2>
          <p className="text-sm mt-1">{pizza.descricao}</p>
        </div>
        <div className="flex items-end justify-between">
          <p className="">R${pizza.preco}</p>
          <div className="bg-primaria w-8 h-8 flex items-center justify-center rounded" onClick={adicionarCarrinho}>
            <FiShoppingCart size={20} className="text-white cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}
