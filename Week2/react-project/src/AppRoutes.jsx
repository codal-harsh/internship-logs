import { Routes, Route } from "react-router-dom";
import App from "./App";
import Note from "./components/Note";
import { useEffect, useState } from "react";
import { readNotesFromStorage } from "./storage/localstorage.handler";

export function AppRoutes() {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    setNotes(readNotesFromStorage());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<App notes={notes} setNote={setNotes} />} />
      <Route
        path="/card/:id"
        element={<Note notes={notes} setNotes={setNotes} />}
      />
    </Routes>
  );
}
