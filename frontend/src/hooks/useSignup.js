import React from 'react';
import {useState} from 'react';
import useAuthContext from './useAuthContext';


 const useSignup=()=>{
    const [isLoading,setIsLoading]=useState(null);
    const [error,setError]=useState(null);
    const {dispatch}=useAuthContext();

    const signup=async (email,password)=>{
        setIsLoading(true);
        setError(null);
        const API_URL = import.meta.env.VITE_API_URL || "";

        const response=await fetch(`${API_URL}/api/signup`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        });
        const json=await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json));

            //update the auth context
            //dispatch({type:'LOGIN',payload:json})
            dispatch({type:"LOGIN",payload:json});

            setIsLoading(false);
        }
    }
    return {signup,isLoading,error}; 


}

export default useSignup;