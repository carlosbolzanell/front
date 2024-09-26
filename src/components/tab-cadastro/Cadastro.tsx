'use client'
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import InputText from "../input-text/InputText";
import { createUser } from "@/api/login";
import { useAuthContext } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function CadastroTab() {

  const { signIn } = useAuthContext();
  const { toast } = useToast();

  const cadastrarUsuario = async (e: FormData) =>{
    e.append("autorizacao", "BASIC");
    const usuario = Object.fromEntries(e);

    try {
      await createUser(usuario);
      const obj = {
        usuario: usuario.usuario,
        senha: usuario.senha
      }
      await signIn(obj);
      toast({description: "Cadastro efetuado com sucesso", variant: "success"})
    }catch(err){
      console.log(err);
      toast({description: "Erro ao efetuar cadastro", variant: "destructive"})
    }
  }

  return (
    <Card>
      <div className="flex flex-col items-center gap-5 my-8">
        <h1 className="font-poppins text-lg">Cadastro</h1>
        <form action={cadastrarUsuario} className="flex flex-col gap-5 w-[70%]">
          <InputText 
            placeholder="Nome" 
            name="nome"
            required />
          <InputText 
            placeholder="Username" 
            name="usuario"
            required/>
          <InputText 
            placeholder="Email" 
            name="email"
            required/>
          <InputText 
            placeholder="Senha" 
            name="senha" 
            type="password"
            required />
          <Button variant={"primaria"} className="text-white">
            Cadastrar
          </Button>
        </form>
      </div>
    </Card>
  );
}
