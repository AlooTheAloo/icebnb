'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { User } from '../../../lib/db/users';
import BnbButton from '../global/BnbButton';
import { login } from '../../global/authmanager';

function SignupInput() {
    const [error, setError] = useState<boolean>(false);
    const [username, setUserName] = useState("");
    const router = useRouter();
    return (
        <div className='p-5 flex flex-col'>
          Nom d'utilisateur
          <input className='mt-2 h-12 rounded-lg bg-[#242424] border-2 border-[#121212] px-2 hover:border-[#FFFFFF] transition-all duration-100 ease-out outline-none'
            onChange={(x) => { setUserName(x.target.value); }}
          />
          
          <div className={"text-red-400 " + (error ? "block" : "hidden")} >
            Un utilisateur avec ce nom existe déjà. Veuillez réessayer.
          </div>
  
          <div className='mt-5 flex flex-col gap-2'>

          <BnbButton primary={true} text='Créer un compte' onClick={() => { 
              setError(false);
              fetch(`/api/createuser/`, {
                method: "POST",
                body : JSON.stringify(
                    {
                        username: username 
                    }
                )
              }).then(async x => {
                console.log(x);
                const resp = (await x.json())
                console.log(resp);
                if(resp.userID  == null) { 
                    setError(true); 
                }
                else { 
                    
                  login(resp.userID);
                  router.push("/");
                }
              });
            }}/>
  
            <BnbButton primary={false} text='Retour au menu' onClick={() => router.push("/")}/>
          </div>
        </div>
    )
}
  


export default SignupInput