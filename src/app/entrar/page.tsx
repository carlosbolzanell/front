import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CadastroTab from "@/components/tab-cadastro/Cadastro";
import TabLogin from "@/components/tab-login/TabLogin";

export default function Entrar() {
  return (
    <div className="mt-16 flex items-center justify-center font-poppins">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full bg-gray-100 grid-cols-2">
          <TabsTrigger value="login" className="bg-white">Login</TabsTrigger>
          <TabsTrigger value="cadastro" className="bg-white">Cadastro</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <TabLogin />
        </TabsContent>
        <TabsContent value="cadastro">
          <CadastroTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
