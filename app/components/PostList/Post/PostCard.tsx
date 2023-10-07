import React from 'react'
import { Post } from '../../../../lib/db/posts'

interface PostCardProps{ 
    post:Post
}

function PostCard(props:PostCardProps) {
  return (
        <div className="h-56 w-[36rem] rounded-xl bg-gradient-to-br from-[#C1C1C1] to-50% transition-all duration-700 p-0.5">
            <div className="rounded-xl flex h-full w-full bg-[#242424] back">
                
                <h1 className="text-2xl font-black text-white">

                </h1>
                <img src={props.post.ImageURL} className='h-32 max-w-[12rem]'/>
            </div>
        </div>
    )
}

export default PostCard