'use client'
import React, { useEffect, useState } from "react";
import { Carrinho } from "@/types/Usuario";
import { getUserByToken } from "@/api/login";
import CardCarrinho from "@/components/card-carrinho/CardCarrinho";
import DialogConfirmacao from "@/components/dialog-confirmacao/DialogConfirmacao";
import { limparCarrinho } from "@/api/carrinho";
import { Button } from "@/components/ui/button";

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
  }, [atualizar]);

  const limparSacola = async () => {
    try {
      await limparCarrinho();
      setAtualizar(Math.random());
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <main className="flex flex-col">
      <section className="mt-10">
        <h1 className="text-center font-poppins text-2xl">Carrinho</h1>
      </section>
      <section className="flex justify-center gap-10 mt-10">
        <section className="font-poppins px-5 py-5 border border-gray-500 rounded w-[60%]">
          <h1 className="text-xl">Produtos</h1>
          <DialogConfirmacao onConfirm={limparSacola} title="Você deseja limpar o carrinho?" text="Limpar carrinho" />
          <div className="mt-6 flex flex-col gap-3">
            {
              carrinho?.produtos.length === 0 ? <p className="text-center text-2xl">Carrinho vazio :(</p> :
                carrinho?.produtos.map((produto) => (
                  <CardCarrinho key={produto.id} produto={produto} setAtualizar={setAtualizar} />
                ))
            }
          </div>
        </section>
        <div className="w-[20%] font-poppins">
          <section className="border rounded h-56 border-gray-500 w-full">
            <h1 className="text-xl text-center mt-5">Resumo</h1>
            <div className="mt-5 ml-5 flex flex-col gap-2">
              <p><span className="font-semibold">Subtotal:</span> R${carrinho?.valorTotal}</p>
              <p><span className="font-semibold">Frete:</span> R$0,00</p>
              <p><span className="font-semibold">Total:</span> R${carrinho?.valorTotal}</p>
            </div>
          </section>
          <Button className="mt-5 w-full text-white" variant="primaria">Finalizar compra</Button>
        </div>
      </section>
    </main>
  );
}
