'use client'

import React from 'react'
import BnbButton from '../components/global/BnbButton';
import { useRouter } from 'next/navigation';

function Buy() {
  const router = useRouter();
  return (
    <div className='min-h-screen h-full w-screen bg flex flex-col items-center justify-center'>
        <div className={`w-[40rem] max-w-[80%] rounded-lg bg-gradient-to-br from-[#C1C1C1] to-50% p-[0.1rem] flex`}>
            <div className='bg-[#121212] rounded-lg flex-grow'>
                <h1 className='text-2xl font-semibold px-5 pt-5 text-center sm:text-left'>
                    Item acheté!
                </h1>
                <div className='flex flex-row m-5 gap-5'>
                    <BnbButton primary={true} text='Retour au menu' onClick={() => {
                        router.replace("/")
                    }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buy