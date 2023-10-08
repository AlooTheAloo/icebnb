'use client'

import React, { useEffect, useState } from 'react'
import BnbButton from '../components/global/BnbButton'
import { getUserID, logOut } from '../global/authmanager'
import { useRouter } from 'next/navigation'
import { User } from '../../lib/db/users'

function Profile() {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        fetch(`/api/getuserbyid/${getUserID()}`).then(async x => {
            const json = await x.json()
            console.log(json);
            if(json.user == undefined){ 
                router.push("/");
            }
            else setUser(json.user);
        })
    }, [])

  const router = useRouter();
  return (
    <div className='min-h-screen h-full w-screen bg flex flex-col items-center justify-center'>
        <div className={`w-[40rem] max-w-[80%] rounded-lg bg-gradient-to-br from-[#C1C1C1] to-50% p-[0.1rem] ${user == null ? "hidden" : "flex"}`}>
            <div className='bg-[#121212] rounded-lg flex-grow'>
                <h1 className='text-2xl font-semibold px-5 pt-5 text-center sm:text-left'>
                    Connecté en tant que { user?.username }
                </h1>
                <div className='flex flex-row m-5 gap-5'>
                    <BnbButton primary={true} text='Déconnecter' onClick={() => {
                        logOut();
                        router.push("/")
                    }}/>
                    <BnbButton primary={false} text='Retourner au menu' onClick={() => {
                        router.push("/")
                    }} />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Profile