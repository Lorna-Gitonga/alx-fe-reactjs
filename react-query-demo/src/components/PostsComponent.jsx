import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }

  return response.json()
}

function PostsComponent() {

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })

  if (isLoading) {
    return <p>Loading posts...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h1>Posts</h1>

      <button onClick={() => refetch()}>
        Refetch Posts
      </button>

      {data.slice(0, 10).map((post) => (
        <div key={post.id} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
  )
}

export default PostsComponent