'use client'

import React from 'react'
import BnbButton from './BnbButton'

function TopOptions() {
  return (
    <div className='p-10 flex flex-row items-end justify-center sm:justify-end gap-2 w-full absolute'>
        <BnbButton primary={false} text='Connection' onClick={() => { console.log("Click"); }}/>
        <BnbButton primary={true} text='Inscription' onClick={() => { console.log("Click"); }}/>
    </div>
  )
}

export default TopOptions