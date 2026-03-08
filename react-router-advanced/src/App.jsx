import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import ProfileDetails from "./pages/ProfileDetails"
import ProfileSettings from "./pages/ProfileSettings"
import Post from "./pages/Post"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      {/* Protected Profile Route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />}>

          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />

        </Route>
      </Route>

      {/* Dynamic Route */}
      <Route path="/posts/:postId" element={<Post />} />

    </Routes>
  )
}

export default App