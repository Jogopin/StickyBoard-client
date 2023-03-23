import { useEffect, useState } from "react";
import {
  createNewNoteRequest,
  getNotesFromBoardRequest,
} from "../services/notesAPI";

export const useBoard = (boardId) => {
  const [notesList, setNotesList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const NotesData = await getNotesFromBoardRequest(boardId);
      setNotesList(NotesData);

    } catch (err) {
      setError(err);
      console.log(`Error getting all the Notes:`, err);

    } finally {
      setIsLoading(false);

    }
  };

  const createNewNote = async (newNoteData) => {
    setError(null);
    try {
      const newNote = await createNewNoteRequest(boardId, newNoteData);
      getAllNotes();
      console.log(`note created:`, newNote);

    } catch (err) {
      setError(err);
      console.log(`Error creating one Note:`, err);
      
    } finally {
      setIsLoading(false);
    }
  };

  return {
    notesList,
    isLoading,
    error,
    createNewNote,
    getAllNotes,
  };
};
