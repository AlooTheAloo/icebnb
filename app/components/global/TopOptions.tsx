'use client'

import React from 'react'
import BnbButton from './BnbButton'
import { useRouter } from 'next/navigation'

function TopOptions() {
  const router = useRouter();
  return (
    <div className='p-10 flex flex-row items-end justify-center sm:justify-end gap-2 w-full absolute'>
        <BnbButton primary={false} text='Connexion' onClick={() => { router.push("/login") }}/>
        <BnbButton primary={true} text='Inscription' onClick={() => { router.push("/signup") }}/>
    </div>
  )
}

export default TopOptions