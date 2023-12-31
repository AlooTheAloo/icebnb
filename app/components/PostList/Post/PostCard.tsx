import React from 'react'
import { Post } from '../../../../lib/db/posts'
import PostButtons from './PostButtons'

interface PostCardProps{ 
    post:Post
}

function PostCard(props:PostCardProps) {
  return (
        <div className="w-full sm:min-h-[14rem] sm:h-fit sm:w-[30rem] rounded-xl bg-gradient-to-br from-[#C1C1C1] to-50% p-[0.1rem]">
            <div className="rounded-xl flex bg-[#242424] flex-col p-4">
                <div className='flex flex-col sm:flex-row gap-2'>
                    <img src={props.post.ImageURL} className='sm:h-32 sm:max-w-[12rem] rounded-2xl'/>
                    <div className=' w-full h-full'>
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
                <PostButtons postID={props.post.id} postOwner={props.post.user}/>
            </div>
        </div>
            
    )
}

export default PostCard