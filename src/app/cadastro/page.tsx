import InputText from "@/components/input-text/InputText";
import Seletor from "@/components/select/Select";
import Title from "@/components/title/Title";
import React from "react";

export default function Cadastro() {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="mt-4">
        <Title title="Cadastro" />
      </section>
      <section className="flex flex-col gap-4">
        <InputText placeholder="Nome" />
        <InputText placeholder="Descriçao" />
        <InputText placeholder="Preço" type="number" />
        <Seletor label="Tipo" options={["Salgada", "Doce"]} />
        <Seletor label="Tamanho" options={["Broto", "Pequena", "Média", "Grande", "Gigante"]} />
      </section>
    </main>
  );
}
