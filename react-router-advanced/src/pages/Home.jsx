import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <Link to="/profile">Profile</Link>
        <br />
        <Link to="/posts/1">Example Post</Link>
      </nav>
    </div>
  )
}

export default Home