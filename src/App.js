import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";
function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/pay" element={<Pay></Pay>}></Route>
          <Route path="/success" element={<Success></Success>}></Route>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
