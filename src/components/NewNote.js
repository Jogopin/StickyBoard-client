import "./NewNote.css"
import axios from "axios";
import { useState } from "react";

export default function NewNote(props) {

  const {boardId,getNotesList} = props
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {title,description}

    axios.post(`${process.env.REACT_APP_API_URL}/api/notes/${boardId}`,newNote)
        .then(responseAxios=>{
            console.log(`note created`,responseAxios.data)
            getNotesList()
            
        })
        .catch(err=>{
            console.log(`Error creating the note ${title}`,err)
            
        })
        .finally(()=>{
          setTitle("")
          setDescription("")

        })
  
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
