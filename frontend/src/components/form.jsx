import React, { useState } from 'react';
import useWorkoutContext from '../hooks/useWorkoutContext';
import useAuthContext from '../hooks/useAuthContext';
const WorkoutForm = () => {
    const {dispatch}=useWorkoutContext();
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields,setEmptyFields]=useState([]);
  const {user}=useAuthContext();
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!user){
        setError('You must be logged in')
        return
    }
    const workout = { title, load, reps };


    const response = await fetch('/api', {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${user.token}`
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyfields)
    }
    if (response.ok) {
      setTitle('');
      setLoad('');
      setReps('');
      setError(null);
      setEmptyFields([]);
      dispatch({type:'CREATE_WORKOUT',payload:json})
      console.log("new workout added", json);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-[30%]   h-[500px] p-6 rounded-lg  mt-2 flex flex-col gap-2"
    >
      <h3 className="font-bold text-black mb-4">
        Add a New Workout
      </h3>

     <label className="text-gray-700">Exercise Title:</label>
<input
  type="text"
  onChange={(e) => setTitle(e.target.value)}
  value={title}
  className={`p-2 w-[280px] bg-white rounded-md focus:outline-none focus:ring-1 ${
    emptyFields.includes("title")
      ? "border border-red-500 focus:ring-red-400"
      : "focus:ring-green-400"
  }`}
/>

<label className="text-gray-700">Load (in kg):</label>
<input
  type="number"
  onChange={(e) => setLoad(e.target.value)}
  value={load}
  className={`p-2 w-[280px] bg-white rounded-md focus:outline-none focus:ring-1 ${
    emptyFields.includes("load")
      ? "border border-red-500 focus:ring-red-400"
      : "focus:ring-green-400"
  }`}
/>

<label className="text-gray-700">Reps:</label>
<input
  type="number"
  onChange={(e) => setReps(e.target.value)}
  value={reps}
  className={`p-2 w-[280px] bg-white rounded-md focus:outline-none focus:ring-1 ${
    emptyFields.includes("reps")
      ? "border border-red-500 focus:ring-red-400"
      : "focus:ring-green-400"
  }`}
/>


      <button
        type="submit"
        className="mt-4 w-[150px] bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
      >
        Add Workout
      </button>

 {error && (
  <div className="flex items-center justify-center w-[280px] px-3 py-2 mt-2 text-sm font-medium text-[#e7195a] bg-red-100 border border-red-300 rounded-md shadow-sm">
    {error}
  </div>
)}

    </form>
  );
};

export default WorkoutForm;
