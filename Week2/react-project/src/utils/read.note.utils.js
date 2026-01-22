export const findNoteById = (notes, id) => {
  return notes.find((note) => note.id == id);
};
