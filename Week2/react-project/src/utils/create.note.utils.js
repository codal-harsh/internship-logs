import { updateStorage } from "../storage/localstorage.handler";

export const createNote = (setNotes, noteToAdd) => {
  setNotes((prev) => {
    noteToAdd.id = prev.length + 1;
    const updatedNotes = [...prev, noteToAdd];
    updateStorage(updatedNotes);
    return updatedNotes;
  });
};
