import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail/component";

function App() {
  return (
    <div className="App h-screen text-txtPrimary">
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
