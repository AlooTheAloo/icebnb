'use client'

import Cookies from "js-cookie";
import React, { use, useState } from 'react'
import BnbButton from '../global/BnbButton'
import { useRouter } from 'next/navigation'
import { User } from "../../../lib/db/users";

function LoginInput() {
  const [error, setError] = useState<boolean>(false);
  const [username, setUserName] = useState("");
  const router = useRouter();
  return (
    <div className='p-5 flex flex-col'>
        Nom d'utilisateur
        <input className='mt-2 h-12 rounded-lg bg-[#242424] border-2 border-[#121212] px-2 hover:border-[#FFFFFF] transition-all duration-100 ease-out outline-none'
          onChange={(x) => { setUserName(x.target.value); }}
        />
        
        <div className='mt-5 flex flex-col gap-2'>
          <BnbButton primary={true} text='Connexion' onClick={() => { 
            setError(false);
            fetch(`/api/getuser/${username}`).then(async x => {
              const resp = (await x.json())
              if(resp.user == null) setError(true);
              else { 
                const user:User = resp.user;
                Cookies.set("userid", user.id);
                router.push("/");
              }
            });
           }}/>
          <BnbButton primary={false} text='Retour au menu' onClick={() => router.push("/")}/>
        </div>
    </div>
  )
}

export default LoginInput