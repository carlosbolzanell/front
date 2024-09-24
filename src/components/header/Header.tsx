import React from "react";
import { LuUser2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { LuPizza } from "react-icons/lu";

export default function Header() {
  return (
    <header className="bg-primaria h-16 flex items-center">
      <div className="flex flex-row justify-between w-[80%] mx-auto items-center">
        <div className="font-kalam text-white flex flex-col items-center">
          <h1>Hungria</h1>
          <h1 className="-mt-1">Pizzas</h1>
        </div>
        <nav className="flex gap-2">
          <LuUser2 size={20} className="text-white"/>
          <LuPizza size={20} className="text-white"/>
          <FiShoppingCart size={20} className="text-white"/>
        </nav>
      </div>
    </header>
  );
}
