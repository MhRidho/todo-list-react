import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewActivity from "./pages/NewActivity";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/new-activity"} element={<NewActivity />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
