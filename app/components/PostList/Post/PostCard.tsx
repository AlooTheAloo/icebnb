import React from 'react'
import { Post } from '../../../../lib/db/posts'
import BnbButton from '../../global/BnbButton'

interface PostCardProps{ 
    post:Post
}

function PostCard(props:PostCardProps) {
  return (
        <div className="h-56 w-[36rem] rounded-xl bg-gradient-to-br from-[#C1C1C1] to-50% transition-all duration-700 p-0.5">
            <div className="rounded-xl flex h-full w-full bg-[#242424] flex-col p-4">
                <div className='flex flex-row gap-2'>
                    <img src={props.post.ImageURL} className='h-32 max-w-[12rem] rounded-2xl'/>
                    <div className='bg-red-200 w-full h-full'>
                        <h1 className='text-white font-bold text-3xl'>
                            { props.post.Name }
                        </h1>
                        <p>
                            {props.post.Price}$ • {props.post.ItemState} 
                        </p>
                        <p>
                            {props.post.Description}
                        </p>
                    </div>
                </div>
                <div className='flex h-full justify-stretch items-center gap-5'>
                    <BnbButton text="Voir l'annonce" primary={false}/>
                    <BnbButton text='Contacter le vendeur' primary={true}/>
                </div>
                
            </div>
        </div>
    )
}

export default PostCard