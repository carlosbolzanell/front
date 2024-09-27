import { addQuantidade, removeProduto, removeQuantidade } from '@/api/carrinho';
import React from 'react'
import { BiSolidTrash } from "react-icons/bi";
import DialogConfirmacao from '../dialog-confirmacao/DialogConfirmacao';

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
        try{
            await removeProduto(id)
            setAtualizar(Math.random())
        }catch(error){
            console.log(error)
        }
    }


  return (
    <div className='font-poppins flex gap-2 items-center'>
        {quantidade == 1 ?
        <DialogConfirmacao 
            triger={ <BiSolidTrash  size={15}/> } 
            title='Remover do carrinho'
            className='w-6 h-6 cursor-pointer rounded flex items-center justify-center  text-white bg-primaria'
            onConfirm={removerDoCarrinho} 
        /> :
        <div 
            className='w-6 h-6 cursor-pointer rounded flex items-center justify-center text-white bg-primaria'
            onClick={removerQuantidade}>
            -
        </div>

        }
        <p className='text-lg'>{quantidade}</p>
        <div 
            className='w-6 cursor-pointer h-6 rounded flex items-center justify-center  text-white bg-primaria'
            onClick={adicionarQuantidade}>
            +
        </div>
    </div>
  )
}
