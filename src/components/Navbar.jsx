import React, { useEffect, useState } from "react";
import { supabase } from "../supabase-client";

function Navbar() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session); // ✅ Only set the actual session
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session); // ✅ Keeps session in sync
    });

    return () => {
      listener.subscription.unsubscribe(); // ✅ Cleanup
    };
  }, []);

  const logouting = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      navigate("/signIn");
    }
  };

  return (
    <div className="shadow-sm bg-gray-100">
      <nav className="flex justify-between items-center h-[60px] px-[5vw]">
        {/* Back Button */}
        <div className="flex items-center gap-9">
          {location.pathname !== "/" && (
            <button
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
            >
              ← Back
            </button>
          )}
          <div className="text-xl font-bold text-gray-800">MyDashboard</div>

          {session ? (
            <button
              className="px-4 py-1.5 rounded-md text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-800 hover:text-white transition"
              onClick={logouting}
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-4 items-center">
              <button
                className="px-4 py-1.5 rounded-md text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-800 hover:text-white transition"
                onClick={() => navigate("/signIn")}
              >
                Sign In
              </button>
              <button
                className="px-4 py-1.5 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-800 hover:text-white transition"
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
