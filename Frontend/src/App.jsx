import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/courses"
              element={authUser ? <Courses /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
