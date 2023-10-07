'use client'

import React from 'react'

interface ButtonProps{
    primary:boolean,
    text:string,
    onClick?:() => void
}

function BnbButton(props:ButtonProps) {
    return (
        <div className={`cursor-pointer py-2 px-4 rounded-lg font-bold border-white border-2  ${props.primary ? "bg-white text-black" : ""}`} onClick={() => {props.onClick?.()}}>             { props.text }
        </div>
    )
}

export default BnbButton