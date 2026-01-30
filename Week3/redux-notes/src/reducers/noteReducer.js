// reducers/noteReducer.js
import * as actions from "../actions/noteAction";

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case actions.REMOVE_NOTE:
      console.log(action.payload);
      
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case actions.UPDATE_NOTE:
      console.log(action.payload);
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? {
                ...note,
                title: action.payload.title,
                description: action.payload.description,
              }
            : note,
        ),
      };

    default:
      return state;
  }
};

export default noteReducer;
