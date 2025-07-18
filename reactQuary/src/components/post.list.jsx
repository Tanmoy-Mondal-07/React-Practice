import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from '../api/api'

const PostList = () => {
    const { data:postData, isError, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,

    })
    return (
        <div className='container'>
            {isLoading && <P>loading...</P>}
            {isError && <p>{error?.message}</p>}

            {postData.map((post)=>{
                return(<div>
                    
                </div>)
            })}
        </div>
    )
}

export default PostList