import { updateStorage } from "../storage/localstorage.handler";

export const createNote = (notes, setNotes, noteToAdd) => {
  setNotes((prev) => {    
    const updatedNotes = [...prev,noteToAdd];
    updateStorage(updatedNotes);
    return updatedNotes; 
  }); 
};
