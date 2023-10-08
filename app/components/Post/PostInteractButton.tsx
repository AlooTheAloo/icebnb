'use client'

import React from 'react'
import BnbButton from '../global/BnbButton'
import { isLoggedIn } from '../../global/authmanager'
import toast, { Toaster } from 'react-hot-toast'
import { buyJSONData } from '../../api/buy/route'
import { useRouter } from 'next/navigation'

interface PostInteractButtonProps{ 
    postID:string
}

function PostInteractButton(props:PostInteractButtonProps) {
  const router = useRouter()
    return (
    <div className='h-20 p-5 flex'>
        <Toaster/>
        <BnbButton primary={true} text='Acheter' onClick={() => {
        if(!isLoggedIn()){
        toast.error("Vous pouvez seulement acheter cet item si vous êtes connectés!", {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })}
        else{
            const data:buyJSONData = { postID: props.postID }
            fetch("/api/buy", {
                method: "POST",
                body: JSON.stringify(data)
            }).then(async x => {
                const ok = (await (x.json())).ok;
                if(ok == undefined || ok == false){ 
                    toast.error("Une erreur s'est produite, veuillez réessayer plus tard");
                }
                else{
                    router.push("/buy")
                }
            })
        }}}
        />
    </div>
      )
}

export default PostInteractButton