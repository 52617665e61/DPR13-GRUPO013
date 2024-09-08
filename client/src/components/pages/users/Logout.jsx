import { Navigate } from "react-router-dom";


function Logout(){
    const navigate = Navigate()
    localStorage.removeItem('AuthToken')
    localStorage.removeItem('User')
    navigate('/')
   
}

export default Logout;