'use client'
import { cadastroPizza } from "@/api/pizza";
import InputFile from "@/components/input-file/InputFile";
import InputText from "@/components/input-text/InputText";
import Seletor from "@/components/select/Select";
import Title from "@/components/title/Title";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import React from "react";

export default function Cadastro() {

  const [file, setFile] = React.useState<File>();
  const { toast } = useToast();
  const router = useRouter();

  const enviarPizza = async (e: FormData) =>{
    const pizza = Object.fromEntries(e);

    const formData = new FormData();
    formData.append("dto", new Blob([JSON.stringify(pizza)], { type: 'application/json' }));
    file && formData.append("imagem", file);
    try{
      cadastroPizza(formData);
      toast({
        description: "Pizza cadastrada com sucesso",
        variant: "success"
      })
      router.push("pizzas");
    }catch(err){
      console.log(err);
      toast({
        description: "Erro ao cadastrar pizza",
        variant: "destructive"
      })
    }
  }

  return (
    <main className="w-full flex flex-col items-center">
      <section className="mt-4">
        <Title title="Cadastro" />
      </section>
      <form action={enviarPizza} className="flex flex-col gap-4">
        <div className="h-28">
          <InputFile setImagem={setFile}/>
        </div>
        <InputText placeholder="Nome" name="nome"/>
        <InputText placeholder="Descriçao" name="descricao"/>
        <InputText placeholder="Preço" type="number" name="preco"/>
        <Seletor 
          label="Tipo" 
          options={["Salgada", "Doce"]} 
          name="tipo" 
          upperCase
        />
        <Seletor
          label="Tamanho"
          options={["Broto", "Pequena", "Média", "Grande", "Gigante"]}
          name="tamanho"
          upperCase
        />
        <div className="flex justify-center">
          <Button variant={"primaria"} type="submit" className="text-white px-10">Cadastrar</Button>
        </div>
      </form>
    </main>
  );
}
