'use client'
import { ChangeEventHandler, Dispatch, InputHTMLAttributes, MouseEventHandler, SetStateAction, useCallback } from "react";
import { useState } from "react"
import { useDropzone } from "react-dropzone";
import { FaRegTrashCan } from "react-icons/fa6";
import { PiPen } from "react-icons/pi";

interface IInputFile {
    fileGetted?: string
    canNotEdit?: boolean
    canExclude?: boolean
    setImagem?: Dispatch<SetStateAction<File | undefined>>
}

export default function InputFile(props: InputHTMLAttributes<HTMLInputElement> & IInputFile) {
    const { fileGetted, canNotEdit, canExclude, setImagem } = props;
    const [file, setFile] = useState(fileGetted);

    const onDrop = useCallback((files: any) => {
        setImagem && setImagem(files[0]);
        const filePegoFunc = files[0]
        const reader: any = new FileReader();
        reader.onload = () => {
            setFile(reader.result);
        };
        reader.readAsDataURL(filePegoFunc);
    }, []);(undefined)

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg']
        }
    })
    if (file) return (
        <HasFile 
            file={file}
            dropzone={dropzone} 
            canNotEdit={canNotEdit} 
            canExclude={canExclude}
            setImagem={setImagem}
        />
    )

    return <Input dropzone={dropzone} setImagem={setImagem}/>

}
interface IInput {
    dropzone: any,
    imagem?: string
    setImagem?: Dispatch<SetStateAction<File | undefined>>
}
const Input = ({ dropzone, imagem, setImagem }: IInput) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;

    const setFile = (files: FileList | null) => {
        if (!files) return;
        setImagem && setImagem(files[0]);
    }

    return (
        <div {...getRootProps()} className={`rounded border border-cinza h-full w-full bg-white flex justify-center items-center ${isDragActive ? 'border-primaria' : 'border-black'}`}>
            <img src={imagem ? imagem : '../assets/galeria.svg'} alt="" className="w-[30%]" />
            <input {...getInputProps()} className="hidden" onChange={(e)=> setFile(e.target.files)}/>
        </div>
    )
}
interface IHasFile {
    file: any,
    dropzone: any
    canNotEdit?: boolean
    canExclude?: boolean
    excludeFile?: MouseEventHandler<HTMLDivElement>
    setImagem?: Dispatch<SetStateAction<File | undefined>>
}
const HasFile = ({ file, dropzone, canNotEdit, canExclude, excludeFile, setImagem }: IHasFile) => {
    return (
        <div className={`rounded relative flex flex-col items-end justify-end h-full w-full bg-branco border border-cinza`}>
            <img src={file} alt="" className={`rounded w-full h-full object-cover`} />
            <div className={`${canNotEdit ? "!hidden" : "!flex"} h-8 w-8 -bottom-3 -right-3 items-center justify-center bg-branco rounded-full absolute`}>
                <Input dropzone={dropzone} imagem={'./assets/lapis.svg'} setImagem={setImagem}/>
            </div>
            <div onClick={excludeFile} className={`${canExclude ? "!flex" : "!hidden"} h-8 w-8 -top-3 -right-3 items-center border border-cinza justify-center bg-branco rounded-full absolute`}>
                <FaRegTrashCan color="red" size={13} className='cursor-pointer' />
            </div>
        </div>
    )
}