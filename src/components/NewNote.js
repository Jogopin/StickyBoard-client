import axios from "axios";
import { useState } from "react";

export default function NewNote(props) {

    const {boardId} = props
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {title,description}

    axios.post(`${process.env.REACT_APP_API_URL}/api/boards/${boardId}/notes`,newNote)
        .then(responseAxios=>{
            console.log(`note created`,responseAxios.data)
            
        })
        .catch(err=>{
            console.log(`Error creating the note ${title}`,err)
            
        })
  
  };

  return (
    <div className="note">
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
          rows={5}
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
