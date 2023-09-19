import React from "react";
import { useNoteContext } from "../hooks/NoteContext";
import "../style/NotesList.css";
import DeleteLogo from "../assets/delete.svg";
const NotesList = () => {
  const { notes, deleteNote } = useNoteContext();

  return (
    <>
      <div>My Notes</div>
      <div className='note-list-container'>
        {notes.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <img
              src={DeleteLogo}
              style={{ cursor: "pointer" }}
              onClick={() => deleteNote(note.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
