import { useState } from 'react'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from './api/api'
import PostList from './components/post.list'

function App() {



  // const { data, isLoading, isError, error, status } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: fetchPosts,
  // })
  // console.log(data, isLoading);

  return (
    <>
      <h2 className='title'>My Posts</h2>
      <PostList />
    </>
  )
}

export default App
