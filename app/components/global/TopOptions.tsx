'use client'

import React, { useEffect, useState } from 'react'
import BnbButton from './BnbButton'
import { useRouter } from 'next/navigation'
import { isLoggedIn } from '../../global/authmanager'

interface TopOptionsProps {
  showSellOption?:boolean
}

function TopOptions(props:TopOptionsProps) {
  const [loggedIn, setLoggedIn] = useState<boolean|null>(null);
  
  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, [])

  const router = useRouter();

  return (
    <div className='p-10 flex flex-row items-end justify-center sm:justify-end gap-2 w-full absolute'>
      {
        loggedIn == null ? <></> : ( // Waiting for useeffect hook
        loggedIn ? (
          <>
            <div className={`${props.showSellOption == false ? "hidden" : ""}`}>
              <BnbButton primary={false} text='Mettre en vente' onClick={() => { router.push("/sell") }}/>
            </div>
            <BnbButton primary={true} text='Profil' onClick={() => { router.push("/profile") }}/>
          </>
        ) :
        (
          <>
            <BnbButton primary={false} text='Connexion' onClick={() => { router.push("/login") }}/>
            <BnbButton primary={true} text='Inscription' onClick={() => { router.push("/signup") }}/>
          </>
        ))
      }

      
      
    </div>
  )
}
  

export default TopOptions