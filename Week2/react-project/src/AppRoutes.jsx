import { Routes, Route } from "react-router-dom";
import App from "./App";
import Note from "./components/Note";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/card/:id" element={<Note />} />
    </Routes>
  );
}
