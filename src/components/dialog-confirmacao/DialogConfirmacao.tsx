import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'

interface DialogConfirmacaoProps {
    text?: string
    triger?: React.ReactNode
    title: string
    descricao?: string
    className?: string
    onConfirm: () => void
}

export default function DialogConfirmacao({ text, triger, className, title, descricao, onConfirm }: DialogConfirmacaoProps) {
    return (
        <Dialog>
            <DialogTrigger className={className}>{triger ? triger : text}</DialogTrigger>
            <DialogContent className='bg-white rounded w-[60%] font-poppins'>
                <DialogHeader>
                    <DialogTitle className='text-center'>{title}</DialogTitle>
                    <DialogDescription>
                        {descricao}
                    </DialogDescription>
                    <div className='flex justify-center gap-5'>
                        <DialogClose>
                            <Button onClick={onConfirm} variant={"primaria"} className='text-white w-20'>Sim</Button>
                        </DialogClose>
                        <Button variant={"primaria"} className='text-white w-20'>Não</Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
