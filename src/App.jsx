import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PurchaseOrder from "./components/PurchaseOrder";
import Invoice from "./components/Invoice";
import FileUpload from "./components/FileUpload";
import Navbar from "./components/Navbar";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import TodoList from "./components/todoList";
import { supabase } from "./supabase-client";

function App() {
  const [session, setSession] = useState({});

  const gettingSession = async () => {
    const currentSession = await supabase.auth.getSession();
    setSession(currentSession);
  };
  useEffect(() => {
    gettingSession();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar />
      {/* <Routes> */}
      {session ? (
        <>
          <Dashboard />
          {/* <Route path="/" element={<Dashboard />} /> */}
        </>
      ) : (
        <>
          <SignIn />
          {/* <Route path="/signIn" element={<SignIn />} /> */}
          {/* <Route path="/signUp" element={<SignUp />} /> */}
        </>
      )}
      {/* </Routes> */}
      {/* // </BrowserRouter> */}
    </>
  );
}
export default App;
