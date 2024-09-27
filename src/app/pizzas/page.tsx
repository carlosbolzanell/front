"use client";
import PizzasTamanho from "@/components/pizzas-tamanho/PizzasTamanho";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pizzas() {


  return (
    <div className="mt-4 flex flex-col items-center justify-center font-poppins">
      <h1 className="mb-4 text-2xl">Pizzas</h1>
      <Tabs defaultValue="broto" className="w-[85%]">
        <TabsList className="grid w-full bg-gray-100 grid-cols-5">
          <TabsTrigger value="broto" className="bg-white">Broto</TabsTrigger>
          <TabsTrigger value="pequena" className="bg-white">Pequena</TabsTrigger>
          <TabsTrigger value="media" className="bg-white">Média</TabsTrigger>
          <TabsTrigger value="grande" className="bg-white">Grande</TabsTrigger>
          <TabsTrigger value="gigante" className="bg-white">Gigante</TabsTrigger>
        </TabsList>
        <TabsContent value="broto">
          <PizzasTamanho tamanho="BROTO" />
        </TabsContent>
        <TabsContent value="pequena">
          <PizzasTamanho tamanho="PEQUENA" />
        </TabsContent>
        <TabsContent value="media">
          <PizzasTamanho tamanho="MEDIA" />
        </TabsContent>
        <TabsContent value="grande">
          <PizzasTamanho tamanho="GRANDE" />
        </TabsContent>
        <TabsContent value="gigante">
          <PizzasTamanho tamanho="GIGANTE" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
