import { useEffect, useState } from "react";
import {
  deleteNoteRequest,
  getNoteRequest,
  updateNoteRequest,
} from "../services/notesAPI";

export const useNote = (boardId, noteId) => {
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    setError(null);
    setLoading(true);

    try {
      const noteData = await getNoteRequest(boardId, noteId);
      setNote(noteData);

    } catch (err) {
      setError(err);
      console.log(`Error getting the Note`, err);

    } finally {
      setLoading(false);
    }
  };

  const updateNote = async (noteDataUpdated) => {
    setError(null);

    try {
      const noteUpdated = await updateNoteRequest(
        boardId,
        noteId,
        noteDataUpdated
      );

    } catch (err) {
      setError(err);
      console.log(`Error updating a Note`);

    }
  };

  const deleteNote = async () => {
    setError(null);

    try {
      await deleteNoteRequest(boardId, noteId);

    } catch (err) {
      setError(err);
      console.log(`Error deleting a Note`);

    }
  };
  
  return {
    note,
    error,
    isLoading,
    getNote,
    updateNote,
    deleteNote,
  };
};
