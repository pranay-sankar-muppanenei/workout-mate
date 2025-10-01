import React from  'react';
import {useEffect} from 'react';
import WorkoutDetails from './workoutDetails';
import useWorkoutContext from '../hooks/useWorkoutContext';
import useAuthContext from '../hooks/useAuthContext';
import WorkoutForm from './form';
const Home=()=>{
    const {user}=useAuthContext();
    const {workouts,dispatch}=useWorkoutContext();
    useEffect(()=>{
const fetchWorkouts = async () => {
  const API_URL = import.meta.env.VITE_API_URL || ""; // "" lets proxy work in dev

  const response = await fetch(`${API_URL}/api/`, {
    headers: { Authorization: `Bearer ${user.token}` },
  });

  const data = await response.json();
  if (response.ok) {
    dispatch({ type: "SET_WORKOUT", payload: data });
  }
};

        if(user){
            fetchWorkouts();
        }
 
    },[dispatch,user]);
    
    return(
        <div className="flex   px-20 bg-gray-200 min-h-screen">
            <div className="w-[70%] pt-4">
            {workouts && workouts.map((workout)=>
                <WorkoutDetails  key={workout._id} workout={workout}/>
            )}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home;