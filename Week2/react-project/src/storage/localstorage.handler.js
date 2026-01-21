export const updateStorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const readNotesFromStorage = () => {
  if (localStorage.getItem("notes") == null) {
    localStorage.setItem("notes", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("notes"));
};
