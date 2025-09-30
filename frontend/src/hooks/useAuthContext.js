import { useContext}   from "react";
import { AuthContext } from "../context/authContext";


const useAuthContext=()=>{
    const context=useContext(AuthContext);

    if(!context){
        throw Error('authContext must be used inside authContextprovider');
    }
    return context;
}

export default useAuthContext;