import React, { useState } from "react";
import { supabase } from "../supabase-client";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session,setSession] = useState({})
  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("Password:", password);
    try {
          const {data,error} = await supabase.auth.signInWithPassword({email,password})
          setSession(data.session) 
            if(error){
              console.error(error)
            }
    } catch (error) {
             console.log(error)
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
