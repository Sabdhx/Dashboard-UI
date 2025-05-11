import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PurchaseOrder from "./components/PurchaseOrder";
import Invoice from "./components/Invoice";
import FileUpload from "./components/FileUpload";
import Navbar from "./components/Navbar";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
  <Routes>
    
    <Route path="/" element={<Dashboard />} />
    <Route path="/purchase" element={<PurchaseOrder />} />
    <Route path="/invoice" element={<Invoice />} />
    <Route path="/upload" element={<FileUpload />} />
        <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />


  </Routes>
</BrowserRouter>

    </>
  );
}
export default App;
