export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const GET_NOTE = "GET_NOTE";

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  payload: id,
});

export const updateNote = ({id, title, description}) => ({
  type: UPDATE_NOTE,
  payload: { id, title, description },
});
