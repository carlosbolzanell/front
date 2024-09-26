'use client'
import { InputHTMLAttributes, useState } from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";

interface inputType{
    erro?: boolean,
    erroMessage?: string
}

export default function InputText(props : InputHTMLAttributes<HTMLInputElement> & inputType) {
    const [focus, setFocus] = useState<boolean>(false)
    const [typePass, setTypePass] = useState<string | undefined>(props.type)

    return (
        <div className="relative flex flex-col font-poppins">
            <input 
                {...props} 
                type={typePass} 
                className={`peer font-poppins px-2 rounded w-full h-10 text-sm text-gray-600 
                border focus:bg-white bg-white placeholder-transparent focus:outline-none 
                ${props?.erro && !focus ? 'border-error': 'border-gray-600'}`}
                onFocus={()=>setFocus(true)} 
                onBlur={()=>setFocus(false)}
            />
            <label 
                htmlFor={props?.id} 
                className="absolute left-1.5 font-poppins px-1 lg:text-sm text-xs transition-all bg-white 
                rounded md:peer-placeholder-shown:text-sm peer-placeholder-shown:text-xs 
                peer-placeholder-shown:text-black peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2
                peer-focus:-top-2 -top-2 peer-focus:left-1.5 peer-focus:bg-white pointer-events-none"
            >{props?.placeholder}</label>

            {props.erro && !focus && (
                <span className="absolute mt-10 font-poppins text-sm text-error">{props.erroMessage}</span>
            )}

            {props.type == 'password' && (
                <div 
                    onClick={()=>setTypePass(typePass == 'text' ? 'password' : 'text')} 
                    className={`absolute top-3 right-2 select-none cursor-pointer`}
                > 
                    {typePass == 'password' ? 
                    <PiEyeClosed className="animate-slide-left"/> : <PiEye className="animate-slide-left"/>}
                </div>
            )}
        </div>
    )
}