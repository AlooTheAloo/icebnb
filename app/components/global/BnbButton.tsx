'use client'

import React from 'react'

interface ButtonProps{
    primary:boolean,
    text:string,
    onClick?:() => void
}

function BnbButton(props:ButtonProps) {
    return (
        <div className={`text-center transition-all duration-400 ease-out cursor-pointer py-2 px-4 rounded-lg font-bold border-white border-2 
        ${props.primary ? "bg-white hover:border-[#a4a4a4] hover:bg-[#a4a4a4] text-black" : 
        "hover:bg-white hover:text-black"}`} 
        onClick={() => {props.onClick?.()}}>
            { props.text }
        </div>
    )
}

export default BnbButton