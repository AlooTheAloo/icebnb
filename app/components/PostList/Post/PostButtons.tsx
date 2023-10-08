'use client'

import React, { useEffect, useState } from 'react'
import BnbButton from '../../global/BnbButton'
import { useRouter } from 'next/navigation'
import { getUserID, isLoggedIn } from '../../../global/authmanager'
import toast, { Toaster } from 'react-hot-toast'

interface PostButtonsProps{ 
  postID:string,
  postOwner:string
}

function PostButtons(props:PostButtonsProps) {
  const router = useRouter();
  const [isMine, setIsMine] = useState<Boolean | null>(null);

  useEffect(() => {
    setIsMine(props.postOwner == getUserID())
  }, []);

  return (
    <div className='flex flex-col xs:flex-row h-full items-stretch justify-stretch sm:items-center gap-5'>
      <Toaster/>
      <>
        <div className='sm:w-[12rem] w-full'>
          <BnbButton text="Voir l'annonce" primary={false} onClick={() => { router.push(`/post/${props.postID}`) }}/>
        </div>
        {
          isMine == null ? <></> : (
            isMine ? 
             <BnbButton text="Modifier l'annonce" primary={true}/>
            :
            <BnbButton text="Acheter" primary={true} onClick={() => {
              if(isLoggedIn()){ 

              }
              else{ 
                toast.error("Vous pouvez seulement acheter cet item si vous êtes connectés!", {
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                })
              }
            }}/>
          )
        }
      </>
    </div>
  )
}

export default PostButtons