import React from 'react'
import { Post } from '../../../lib/db/posts'
import PostCard from './Post/PostCard'

interface PostListProps { 
    posts:Post[]
}

function PostList(props:PostListProps) {
  if(props.posts.length == 0){
    return (
        <div className='text-4xl font-semibold w-screen h-72 flex items-center justify-center'>
            Aucun item trouvé sur cette page
        </div>
    )
  }
  else return (
    <div>
        {props.posts.map(x => <PostCard post={x}/>)}
    </div>
  )
}

export default PostList