'use client'

import React, { use, useEffect, useState } from 'react'
import BnbButton from '../global/BnbButton'
import { useRouter } from 'next/navigation'
import { User } from "../../../lib/db/users";
import { isLoggedIn, login } from "../../global/authmanager";
import Inputfield from '../global/InputField';

function LoginInput() {
  const [error, setError] = useState<boolean>(false);
  const [username, setUserName] = useState("");
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const logged = isLoggedIn(); 
    if(logged){ 
      router.push("/");
    }
    else{ 
      setLoggedIn(logged)
    }
  }, [])

  return (
    <div className={'p-5 flex flex-col ' + (loggedIn == null ? 'hidden' : '')}>
        Nom d'utilisateur
        
        <Inputfield onChange={(x) => { setUserName(x); }}/>
        
        <div className={"text-red-400 " + (error ? "block" : "hidden")} >
          Cet utilisateur n'existe pas. 
          <b className="cursor-pointer" onClick={() => {router.push("/signup")}}>
            {" "} Creer un compte?
          </b>          
          
        </div>

        <div className='mt-5 flex flex-col gap-2'>
          <BnbButton primary={true} text='Connexion' onClick={() => { 
            setError(false);
            fetch(`/api/getuser/${username}`).then(async x => {
              const resp = (await x.json())
              if(resp.user == null) setError(true);
              else { 
                const user:User = resp.user;
                login(user.id);
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