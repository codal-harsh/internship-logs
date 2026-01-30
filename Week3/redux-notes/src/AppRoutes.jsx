import { Routes, Route } from "react-router-dom";
import App from "./App";
import Note from "./Pages/Note";
import Login from "./Pages/Login";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<App />} />
      <Route path="/card/:id" element={<Note />} />
    </Routes>
  );
}
