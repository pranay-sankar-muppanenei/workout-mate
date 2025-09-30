// src/components/WorkoutDetails.jsx
import React from "react";
import useWorkoutContext from "../hooks/useWorkoutContext";
import { Trash2 } from "lucide-react"; // ✅ delete ico
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import useAuthContext from "../hooks/useAuthContext";

const WorkoutDetails = ({ workout }) => {
  const {dispatch}=useWorkoutContext();
  const {user}=useAuthContext();
  if (!workout) return null;

  const handleDelete = async () => {
    if(!user){

      return
    }
    const response = await fetch(`/api/${workout._id}`, {
      method: "DELETE",
      headers: { 'Authorization': `Bearer ${user.token}` }  
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({type:"DELETE_WORKOUT",payload:json})
      console.log("Workout deleted:", json);
      // here you’ll probably want to dispatch to context or refresh workouts
    }
  };

  return (
    <div className="w-[90%] h-auto m-2 bg-white p-6 mb-6 rounded-sm flex justify-between items-start">
      {/* Left Content */}
      <div>
        <h2 className="font-bold text-[20px] uppercase text-green-600 mb-1">
          {workout.title}
        </h2>
        <p>
          <span className="font-semibold">Load(kg):</span>{" "}
          <span className="text-gray-700">{workout.load}</span>
        </p>
        <p>
          <span className="font-semibold">Reps:</span>{" "}
          <span className="text-gray-700">{workout.reps}</span>
        </p>
        <p className="text-gray-500 text-sm">{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-red-100 transition"
      >
        <Trash2 size={20} className="text-gray-600 hover:text-red-600" />
      </button>
    </div>
  );
};

export default WorkoutDetails;
