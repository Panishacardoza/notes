import React from "react";
import { useNoteContext } from "../hooks/NoteContext";
import { useState } from "react";
import "../style/CreateNote.css";

const CreateNote = () => {
  const { addNote } = useNoteContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // handle Add note
  const handleAddNote = () => {
    addNote(title, content);
    setTitle("");
    setContent("");
  };
  return (
    <>
      <div className='create-container'>
        <h1 className='note-text'>Add a Note</h1>
        <input
          type='text'
          placeholder='Title'
          className='title-input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Take Notes'
          className='take-notes'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className='add-btn' onClick={handleAddNote}>
          Add Notes
        </button>
      </div>
    </>
  );
};

export default CreateNote;
