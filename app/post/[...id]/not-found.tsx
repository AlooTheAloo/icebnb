'use client'

import Link from 'next/link'
import BnbButton from '../../components/global/BnbButton'
import { useRouter } from "next/navigation"  

export default function NotFound() {
  const router = useRouter();
  return ( 
      <div className='min-h-screen h-full w-screen bg flex flex-col items-center justify-center'>
            <div className="w-[40rem] max-w-[80%] rounded-lg bg-gradient-to-br from-[#C1C1C1] to-50% p-[0.1rem] flex">
                <div className='bg-[#121212] rounded-lg flex-grow'>
                    <h1 className='text-2xl sm:text-4xl font-semibold px-5 pt-5 text-center sm:text-left'>
                        Ce post n'existe pas :(
                    </h1>
                    <div className='w-52 ml-5 mt-5'>
                      <BnbButton text='Retourner au menu' primary={true} onClick={() => {
                        router.push("/");
                      }}/>
                    </div>
                </div>
            </div>
      </div>
  )
}