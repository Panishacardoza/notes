import { createContext, useContext, useState } from "react";

// Create Context
const NoteContext = createContext();

// Create a custom hook to access the context
export const useNoteContext = () => {
  return useContext(NoteContext);
};

// Create a custom provider component
export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Add Note
  const addNote = (title, content) => {
    const newNote = {
      id: Math.random(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
  };

 

  // Delete Note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote,  }}>
      {children}
    </NoteContext.Provider>
  );
};
