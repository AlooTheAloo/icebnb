'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { User } from '../../../lib/db/users';
import BnbButton from '../global/BnbButton';
import { login } from '../../global/authmanager';
import Inputfield from '../global/InputField';

function SignupInput() {
    const [error, setError] = useState<boolean>(false);
    const [username, setUserName] = useState("");
    const router = useRouter();
    return (
      <div className='p-5 flex flex-col'>
        Nom d'utilisateur
        <Inputfield onChange={(x) => { setUserName(x); }}/>
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
              const resp = (await x.json())
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