import { useParams } from "react-router-dom"

function Post() {

  const { postId } = useParams()

  return (
    <div>
      <h1>Post ID: {postId}</h1>
      <p>This is a dynamic route.</p>
    </div>
  )
}

export default Post