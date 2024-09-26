import { addQuantidade, removeQuantidade } from '@/api/carrinho';
import React from 'react'
import { BiSolidTrash } from "react-icons/bi";

interface QuantidadeProps {
    quantidade: number
    setAtualizar: React.Dispatch<React.SetStateAction<number>>
    id: number
}

export default function Quantidade({ quantidade, id, setAtualizar }: QuantidadeProps) {

    const adicionarQuantidade = async () => {
        try{
            await addQuantidade(id)
            setAtualizar(Math.random())
        }catch(error){
            console.log(error)
        }
    }

    const removerQuantidade = async () => {
        try{
            await removeQuantidade(id)
            setAtualizar(Math.random())
        }catch(error){
            console.log(error)
        }
    }

    const removerDoCarrinho = async () => {
        console.log("Removendo do carrinho")
    }


  return (
    <div className='font-poppins flex gap-2 items-center'>
        <div 
            className='w-6 h-6 cursor-pointer rounded flex items-center justify-center text-white bg-primaria'
            onClick={quantidade == 1 ? removerDoCarrinho : removerQuantidade}>
            {quantidade == 1 ? <BiSolidTrash  size={15}/> : "-"}
        </div>
        <p className='text-lg'>{quantidade}</p>
        <div 
            className='w-6 cursor-pointer h-6 rounded flex items-center justify-center text-white bg-primaria'
            onClick={adicionarQuantidade}>
            +
        </div>
    </div>
  )
}
