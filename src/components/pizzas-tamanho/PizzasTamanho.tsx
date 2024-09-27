import { Pizza } from "@/types/pizza";
import React, { useEffect, useState } from "react";
import { listarPizzas } from "@/api/pizza";
import CardPizza from "@/components/card-pizza/CardPizza";

interface PizzasTamanhoProps {
    tamanho: string;
}

export default function PizzasTamanho({ tamanho }: PizzasTamanhoProps) {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    useEffect(() => {
        const func = async () => {
            const getPizzas = await listarPizzas(tamanho);
            if (getPizzas) {
                setPizzas(getPizzas.content);
            }
        };
        func();
    }, []);
    return (
        <main>
            <div className="grid mt-3 grid-cols-3 gap-2 w-full mx-auto">
                {pizzas.map((pizza) => (
                    <CardPizza key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </main>
    );
}
