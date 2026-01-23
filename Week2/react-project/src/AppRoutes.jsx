import { Routes, Route } from "react-router-dom";
import App from "./App";
import Note from "./Pages/Note";
import { useEffect, useState } from "react";
import { readNotesFromStorage } from "./storage/localstorage.handler";
import Login from "./Pages/Login";
import { ToastContainer, toast } from "react-toastify";


export function AppRoutes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(readNotesFromStorage());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<App notes={notes} setNote={setNotes} />} />
      <Route
        path="/card/:id"
        element={<Note notes={notes} setNotes={setNotes} />}
      />
    </Routes>
  );
}
