import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {

  const isAuthenticated = false // simulate login

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute