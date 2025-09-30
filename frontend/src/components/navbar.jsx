import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";
 
const Navbar=()=>{
    const {logout}=useLogout();
    const {user}=useAuthContext();
    const handleLogout=()=>{
        
        logout();
    }
    return(
        <div className="max-w-[1400px] m-5 px-20 flex justify-between items-center">
            <Link to='/'>
                <h1 className="font-bold text-[25px]">Workout Buddy</h1>
            </Link>
            <div className="flex gap-4">
                {user && (
  <div className="flex items-center gap-3">
    <span className="text-gray-800 font-medium">{user.email}</span>
    <button
      onClick={handleLogout}
      className="px-4 py-2 border border-green-400 text-black text-sm font-medium rounded-lg shadow  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1 transition"
    >
      Logout
    </button>
  </div>
)}

                {!user&&
                <>
                <Link to='/login'>
                <button className="text-black hover:underline">Login</button>
                </Link>
                <Link to='/signup'>
                <button className="text-black hover:underline">Sign Up</button>
                </Link>
                </>
}
            </div>
        </div>
    )
};

export default Navbar;