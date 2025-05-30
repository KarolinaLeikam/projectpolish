import "./App.css";
import Home from "./pages/Home/Home.jsx";
import CreateTest from "./pages/CreateTest/CreateTest.js";
import Test from "./pages/Test/Test.js";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/create" element={<CreateTest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
