'use client'
import { useState, useEffect, useRef, MutableRefObject, Dispatch, SetStateAction } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface ISelect {
    label: string,
    options: string[],
    disabled?: boolean
    bg?: boolean
    erro?: string
    isErro?: boolean
    name?: string
    upperCase?: boolean
}

export default function Seletor({ label, options, disabled, bg, erro, isErro, name, upperCase }: ISelect) {
    const [open, setOpen] = useState<boolean>(false);

    const [opcao, setOpcao] = useState<string>("");

    const selectRef: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectRef]);

    return (
        <div ref={selectRef}>
            <p className={`md:text-base text-sm font-poppins text-preto ${bg ? "!block" : "!hidden"}`}>{label}</p>
            <div
                tabIndex={0}
                onClick={() => setOpen(disabled ? false : !open)}
                className={`
                ${isErro && !open ? 'border-error' : ''} 
                cursor-pointer relative border border-cinza h-10 w-full rounded flex items-center select-none border-gray-600
                ${bg ? `bg-branco ${disabled ? "border-none" : "border-primaria border-2"} h-11` : ''}`}>

                <div className="flex flex-row items-center justify-between w-[90%] m-auto">
                    <label htmlFor="" className={`${bg ? "!hidden" : "!flex"} font-poppins text-black md:text-sm text-xs absolute bg-white px-1 pointer-events-none left-2 ${open || opcao ? 'md:-top-3 -top-2 left-1.5' : ""}`}>{label}</label>
                    <p className="font-poppins text-cinza-escuro lg:text-sm text-xs">{opcao ? opcao : ""}</p>
                    <p className={`${disabled ? `hidden` : `flex`} duration-500 ${open ? "rotate-180" : ""}`}>{<FaChevronDown />}</p>
                </div>

                <p className={`${isErro && !open ? 'visible' : 'invisible'} absolute top-10 text-xs text-error font-poppins`}>{erro}</p>
                
                {open && (
                    <ul className={`absolute transition-all bg-white flex flex-col ${bg ? 'top-12' : "top-11"} w-full rounded-lg max-h-60 shadow shadow-cinza overflow-y-auto select-none z-50`}>
                        {options.map((opcao, i) => (
                            <li value={opcao} key={i} className="font-poppins md:text-sm text-xs pl-3 py-2 h-10 hover:bg-cinza-claro " onClick={() => {
                                setOpcao(opcao)
                            }}>
                                <button className="flex w-full h-full items-center">{opcao}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <input type="hidden" name={name} value={upperCase ? opcao.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : opcao} />
        </div>
    );
}
