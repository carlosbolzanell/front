'use client'
import React from "react";
import { Card } from "@/components/ui/card";
import InputText from "../input-text/InputText";
import { Button } from "../ui/button";
import { useAuthContext } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

export default function TabLogin() {
  
    const { signIn } = useAuthContext();
    const { toast } = useToast();

    const login = async (e: FormData) =>{
        const login = Object.fromEntries(e);
        try{
            await signIn(login);
            toast({description: "Login efetuado com sucesso", variant: "success"})
        }catch(err){
            console.log(err);
            toast({description: "Erro ao efetuar login", variant: "destructive"})
        }
    }
  
  
    return (
    <Card>
      <div className="flex flex-col items-center gap-5 my-8">
        <h1 className="font-poppins text-lg">Login</h1>
        <form action={login} className="flex flex-col gap-5 w-[70%]">
          <InputText placeholder="Usuario" name="usuario"/>
          <InputText placeholder="Senha" name="senha" type="password" />
          <Button variant={"primaria"} className="text-white" type="submit">
            Entrar
          </Button>
        </form>
      </div>
    </Card>
  );
}
