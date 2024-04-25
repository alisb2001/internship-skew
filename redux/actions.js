export const addNote = (title, content) => ({
  type: "ADD_NOTE",
  payload: {
    id: Math.random(),
    title,
    content,
  },
});

export const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  payload: id,
});

export const editNote = (id, title, content) => ({
  type: "EDIT_NOTE",
  payload: {
    id,
    title,
    content,
  },
});

