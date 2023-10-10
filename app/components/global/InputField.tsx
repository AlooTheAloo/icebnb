'use client'

import React from 'react'

interface InputFieldProps {
  onChange:(value:string) => void
  value:string
}


function Inputfield(props:InputFieldProps) {
  return (
    <input onChange={(x) => { props.onChange(x.target.value); }} value={props.value}
      className='outline-none mt-2 h-12 rounded-lg bg-[#242424] border-2 border-[#121212] px-2 hover:border-[#FFFFFF] transition-all duration-100 ease-out'>
    </input>  
)
}

export default Inputfield