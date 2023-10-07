'use client'

import React from 'react'
import BnbButton from '../../global/BnbButton'
import { useRouter } from 'next/navigation'

interface PostButtonsProps{ 
    postID:string
}

function PostButtons(props:PostButtonsProps) {
    const router = useRouter();
  return (
    <div className='flex flex-col xs:flex-row h-full items-stretch justify-stretch sm:items-center gap-5'>
        <BnbButton text="Voir l'annonce" primary={false} onClick={() => { router.push(`/post/${props.postID}`) }}/>
        <BnbButton text='Contacter le vendeur' primary={true}/>
    </div>
  )
}

export default PostButtons