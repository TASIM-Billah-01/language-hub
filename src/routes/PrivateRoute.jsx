import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {myUser, loading} = useContext(authContext);
    console.log(myUser);
    
    if(loading) return <p>loading...</p>
    if(myUser) return  children

            
           
    return <Navigate state={location.pathname}  to='/login'></Navigate>
    };

export default PrivateRoute;