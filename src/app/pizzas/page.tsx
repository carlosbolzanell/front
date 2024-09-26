"use client";
import { listarPizzas } from "@/api/pizza";
import CardPizza from "@/components/card-pizza/CardPizza";
import { Pizza } from "@/types/pizza";
import React, { useEffect, useState } from "react";

export default function Pizzas() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    const func = async () => {
      const getPizzas = await listarPizzas();
      if (getPizzas) {
        setPizzas(getPizzas.content);
      }
    };
    func();
  }, []);

  return (
    <main>
      <h1 className="text-2xl text-center my-5">Pizzas do cardápio</h1>
      <div className="grid grid-cols-3 gap-2 w-[90%] mx-auto">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </main>
  );
}
