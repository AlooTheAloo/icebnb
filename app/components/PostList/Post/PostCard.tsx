import React from 'react'
import { Post } from '../../../../lib/db/posts'

interface PostCardProps{ 
    post:Post
}

function PostCard(props:PostCardProps) {
  return (
    <div>{props.post.Description}</div>
  )
}

export default PostCard