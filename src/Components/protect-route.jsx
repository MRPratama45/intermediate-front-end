import { useEffect } from "react";
import { useNavigate } from "react-router";


import { authService } from "../services/api/auth-service";

const ProtectedRoute = ({children}) => {
  const navigate = useNavigate()
  const currentUser = authService.getCurrentUser()

  useEffect(() => {
    if (!currentUser) {
      navigate('/', {replace: true})
    }

  },[currentUser, navigate])

  return currentUser ? children : null

}

export default ProtectedRoute