'use client'

import React from 'react'
import BnbButton from '../global/BnbButton';
import { useRouter } from 'next/navigation';

function ReturnButton() {
  const router = useRouter();
  return (
    <div className='w-full sm:w-48'>
      <BnbButton primary={false} text='Retour au menu' onClick={() => { router.push("/") }} />
    </div>
  )
}

export default ReturnButton
