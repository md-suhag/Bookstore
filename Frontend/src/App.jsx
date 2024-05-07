import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
