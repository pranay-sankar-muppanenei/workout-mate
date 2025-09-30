import { useState } from "react";
import  useSignup  from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup,isLoading,error}=useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="h-[88vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 py-6 w-80"
      >
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Sign Up
        </h3>

        <label className="block text-gray-700 mb-2 text-sm">Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <label className="block text-gray-700 mb-2 text-sm">Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
        disabled={isLoading}
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md font-medium "
        >
          Sign Up
        </button>
        {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
