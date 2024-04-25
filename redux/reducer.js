const initialState = {
  notes: [ 
    {
      id: 1,
      title: "At Morning",
      content: "I should take a shower at 7 AM",
    },
    {
      id: 2,
      title: "At Night",
      content: "I should go to bed at 10 PM",

    }
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case "EDIT_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? {
                ...note,
                title: action.payload.title,
                content: action.payload.content,
              }
            : note
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
