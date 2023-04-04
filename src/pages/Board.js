import "./Board.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NewNote from "../components/NewNote";
import NoteDetails from "../components/NoteDetails";

import Modal from "../components/Modal";
import { useBoard } from "../hooks/useBoard";
import Note from "../components/Note";

export default function Board() {
  const { boardId } = useParams();
  const { notesList, createNewNote, getAllNotes } = useBoard(boardId);

  const [selectedNote, setSelectedNote] = useState(null);

  //Render the notes
  const renderNotes = () => {
    return (
      <div className="board">
        {notesList.map((note) => (
          <Note key={note._id} {...note} setSelectedNote={setSelectedNote} />
        ))}
      </div>
    );
  };

  return (
    <>
      <NewNote boardId={boardId} createNewNote={createNewNote} />

      {notesList ? renderNotes() : ""}

      <Modal open={selectedNote} onClose={setSelectedNote}>
        <NoteDetails
          noteId={selectedNote}
          boardId={boardId}
          getAllNotes={getAllNotes}
          setSelectedNote={setSelectedNote}
        />
      </Modal>
    </>
  );
}
