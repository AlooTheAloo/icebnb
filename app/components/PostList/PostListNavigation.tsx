'use client'

import React from 'react'
import BnbButton from '../global/BnbButton'
import { useRouter } from 'next/navigation'


interface PostListNavigationProps {
    totalPages:number
    currentPage:number
}

function PostListNavigation(props:PostListNavigationProps) {
    const router = useRouter();
    return (
        <div className='flex flex-row justify-center m-5 gap-5'>
            <div className={`${props.currentPage <= 1 ? "hidden" : "block"}`}>
                <BnbButton text='Page précédente' primary={false} onClick={() => { 
                    router.push(`/?page=${props.currentPage - 1}`)
                }}/>
            </div>

            <div className={`${props.currentPage >= props.totalPages ? "hidden" : "block"}`}>
                <BnbButton text='Prochaine page' primary={false} onClick={() => { 
                    router.push(`/?page=${props.currentPage + 1}`)    
                }}/>
            </div>
        </div>
    )
}

export default PostListNavigation