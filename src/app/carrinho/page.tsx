'use client'
import React, { useEffect, useState } from "react";
import { Carrinho } from "@/types/Usuario";
import { getUserByToken } from "@/api/login";
import CardCarrinho from "@/components/card-carrinho/CardCarrinho";

export default function Carrinho() {

    const [carrinho, setCarrinho] = useState<Carrinho>();
    const [atualizar, setAtualizar] = useState<number>(0);

    useEffect(() => {
        const func = async () => {
            try {
                const usuario = await getUserByToken();
                if (usuario) {
                    setCarrinho(usuario.carrinho);
                    console.log(usuario.carrinho);
                } else {
                    console.log("Erro ao buscar carrinho");
                }
            } catch (error) {
                console.log("Erro ao buscar carrinho");
            }
        }
        func();
    } , [atualizar]);


  return (
    <main className="flex flex-col">
      <section className="mt-10">
        <h1 className="text-center font-poppins text-2xl">Carrinho</h1>
      </section>
      <section className="flex justify-center gap-10 mt-10">
        <section className="font-poppins px-5 py-5 border border-gray-500 rounded w-[60%]">
          <h1 className="text-xl">Produtos</h1>
          <p className="cursor-pointer">Limpar sacola</p>
          <div className="mt-6 flex flex-col gap-3">
            {
                carrinho?.produtos.map((produto) => (
                    <CardCarrinho key={produto.id} produto={produto} setAtualizar={setAtualizar} />
                ))
            }
          </div>
        </section>
        <section className="font-poppins border border-gray-500 rounded w-[20%]">
          <h1 className="text-xl text-center">Resumo</h1>
        </section>
      </section>
    </main>
  );
}
