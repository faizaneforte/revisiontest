import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; 
import Error from "./pages/Error"
import SignUp from "./components/Signup"
import SigIn from "./components/SignIn"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Error" element={<Error/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SigIn/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
