import { updateStorage } from "../storage/localstorage.handler";

export const deleteNote = (id, setNotes) => {
  setNotes((prev) => {
    const updated = prev.filter((note) => note.id != id);
    updateStorage(updated);
    return updated;
  });
};
