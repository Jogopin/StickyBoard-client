import "./NewNote.css";
import axios from "axios";
import { useState } from "react";

export default function NewNote(props) {
  const { boardId, createNewNote } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = { title, description };

    createNewNote(newNote);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="note new-note">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          rows={2}
          name="description"
          autoComplete="off"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Create new note</button>
      </form>
    </div>
  );
}
