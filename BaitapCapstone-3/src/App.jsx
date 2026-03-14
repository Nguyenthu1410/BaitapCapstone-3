import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Route, Routes } from "react-router";
import AdminLayout from "./Layout/AdminLayout";
import MainLayout from "./Layout/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<h1 className="h-[[3000px]">Home</h1>} />
        <Route path="/sign-in" element={<h1>Sign In</h1>} />
      </Route>

      <Route element={<AdminLayout/>}>
      </Route>
    </Routes>
  );
}

export default App;
