import { updateStorage } from "../storage/localstorage.handler";

export const toggleFavorite = (setNotes, id, setFav) => {
  setNotes((prev) => {
    const indexToToggle = prev.findIndex((note) => note.id == id);
    const changedNote = prev.at(indexToToggle);
    changedNote.favorite = !changedNote.favorite;
    prev.with(indexToToggle, changedNote);
    updateStorage(prev);
    setFav((prev) => !prev);
    return prev;
  });
};

export const updateSingleNote = (setNotes, noteToUpdate) => {
  setNotes((prev) => {
    const updatedNotes = prev.map((note) =>
      note.id === noteToUpdate.id ? noteToUpdate : note,
    );
    updateStorage(updatedNotes);
    return updatedNotes;
  });
};
