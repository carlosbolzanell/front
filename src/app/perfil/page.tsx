"use client";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Usuario } from "@/types/Usuario";
import { getUserByToken } from "@/api/login";
import { useRouter } from "next/navigation";
import InputText from "@/components/input-text/InputText";
import { Button } from "@/components/ui/button";

export default function Perfil() {
  const [usuario, setUsuario] = useState<Usuario>();
  const [editar, setEditar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const func = async () => {
      try {
        const usuarioFetch = await getUserByToken();
        if (usuarioFetch) {
          setUsuario(usuarioFetch);
        } else {
          console.log("Erro ao buscar usuario");
          router.push("/entrar");
        }
      } catch (error) {
        console.log("Erro ao buscar usuario");
        router.push("/entrar")
      }
    };
    func();
  }, []);

  return (
    <main>
      <section className="my-5">
        <h1 className="font-poppins text-center text-2xl">Perfil</h1>
      </section>
      <section className="flex justify-center gap-10">
        <section className="flex gap-4 px-3 pt-4 border border-gray-600 rounded font-poppins w-96">
          <FaRegUserCircle size={80} />
          <section className="flex flex-col gap-4 mb-4 w-full">
            <h2 className="font-poppins text-lg">Dados Pessoais</h2>

            <InputText
              placeholder="Nome"
              defaultValue={usuario?.nome}
              readOnly={!editar}
              name="nome"
            />
            <InputText
              placeholder="Usuario"
              defaultValue={usuario?.usuario}
              readOnly={!editar}
              name="usuario"
            />
            <InputText
              placeholder="Email"
              defaultValue={usuario?.email}
              readOnly={!editar}
              name="email"
            />
            <div className="flex justify-between">
              <div>
                <Button
                  variant={ "primaria"}
                  className="text-white"
                >
                  Sair
                </Button>
              </div>
              <div>
                <Button
                  variant={"primaria"}
                  className="text-white"
                  onClick={() => setEditar(!editar)}
                >
                  {editar ? "Salvar" : "Editar"}
                </Button>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="flex items-center justify-center font-poppins">
            <Tabs defaultValue="enderecos" className="w-[400px]">
              <TabsList className="grid w-full bg-gray-100 grid-cols-2">
                <TabsTrigger value="enderecos" className="bg-white">
                  Endereços
                </TabsTrigger>
                <TabsTrigger value="pedidos" className="bg-white">
                  Pedidos
                </TabsTrigger>
              </TabsList>
              <TabsContent value="enderecos">
                <div></div>
              </TabsContent>
              <TabsContent value="pedidos">
                <div></div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </section>
    </main>
  );
}
