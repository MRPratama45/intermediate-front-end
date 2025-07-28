import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    // hapus data user from local storage
    localStorage.removeItem('user')

    // redirect to login page
    navigate('/')
  }, [navigate] )
  return (
    <div>
      <h2>Loading Logout</h2>
    </div>
  )
}

export default Logout