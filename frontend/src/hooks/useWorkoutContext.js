import { useContext}   from "react";
import { WorkoutContext } from "../context/workoutContext";


const useWorkoutContext=()=>{
    const context=useContext(WorkoutContext);

    if(!context){
        throw Error('useWorkoutContext must be used inside workoutcontextprovider');
    }
    return context;
}

export default useWorkoutContext;