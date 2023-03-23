import "./NoteDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNote } from "../hooks/useNote";

export default function NoteDetails(props) {
  const { boardId, noteId, setSelectedNote, getAllNotes } = props;

  const { note, updateNote, deleteNote } = useNote(boardId, noteId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checklist, setChecklist] = useState(null);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setChecklist(note.checklist || []);
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteDataUpdated = { title, description, checklist };

    try {
      await updateNote(noteDataUpdated);
      await getAllNotes();
      setSelectedNote(null);
    } catch (err) {
      console.log(`error submiting the note`);
    }
  };

  const handleDeleteNote = async (e) => {
    try {
      await deleteNote();
      await getAllNotes();
      setSelectedNote(null);
    } catch (err) {
      console.log(`error deleting the note`);
    }
  };

  const handleOnChangeChecklist = (e, i) => {
    const { name, value, checked } = e.target;

    //there are some errors when i checked the box, need to research more on that
    setChecklist((prevState) => {
      const newChecklist = [...prevState];

      newChecklist[i] = {
        ...checklist[i],
        [name]: name === "isChecked" ? checked : value,
      };
      return newChecklist;
    });
  };

  const handlePlusClick = (e) => {
    e.preventDefault();

    setChecklist((prevState) => {
      return [...prevState, { task: "", isChecked: false }];
    });
  };

  const handleDeleteTask = (e, i) => {
    e.preventDefault();

    setChecklist((prevState) => {
      const newChecklist = [...prevState];
      newChecklist.splice(i, 1);

      return newChecklist;
    });
  };

  return (
    <div className="note-details">
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />

        <textarea
          rows={2}
          name="description"
          autoComplete="off"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <div className="checklist-container">
          {checklist
            ? checklist.map((taskObj, index) => {
                return (
                  <div className="task-container" key={index}>
                    <input
                      type="checkbox"
                      name="isChecked"
                      checked={taskObj.isChecked}
                      onChange={(e) => {
                        handleOnChangeChecklist(e, index);
                      }}
                    />
                    <input
                      type="text"
                      name="task"
                      value={taskObj.task}
                      onChange={(e) => {
                        handleOnChangeChecklist(e, index);
                      }}
                    />
                    <button
                      onClick={(e) => {
                        handleDeleteTask(e, index);
                      }}
                    >
                      x
                    </button>
                  </div>
                );
              })
            : ""}
        </div>

        <button onClick={handlePlusClick}>+</button>

        <button>done</button>
      </form>
      <button className="btn-delete" onClick={handleDeleteNote}>
        delete
      </button>
    </div>
  );
}
