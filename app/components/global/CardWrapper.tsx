import React, { Children, ReactNode } from 'react'

interface CardWrapperProps{
    children:ReactNode
}

function CardWrapper(props:CardWrapperProps) {
  return (
    <div className="sm:h-56 sm:w-[30rem] rounded-xl bg-gradient-to-br from-[#C1C1C1] to-50% p-[0.1rem]">
        {
            props.children
        }
    </div>
  )
}

export default CardWrapper