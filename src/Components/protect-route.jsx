// import { useEffect } from "react";
import { Navigate } from "react-router";


// import { authService } from "../services/api/auth-service";

const ProtectedRoute = ({children}) => {
 
  const isLoginIn = localStorage.getItem('user')

  if (!isLoginIn || isLoginIn === null) {
    return <Navigate to="/" />
  }
  
  return children

}

const AuthRoute = ({children}) => {
  const isLoginIn = localStorage.getItem('user') !== null

  if (isLoginIn) {
    return <Navigate to="/Dashboard" replace/>
  }

  return children
}

export {ProtectedRoute, AuthRoute}