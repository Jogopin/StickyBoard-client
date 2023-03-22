import { useEffect, useState } from "react";
import {
  getBoardsRequest,
  deleteBoardRequest,
  updateBoardRequest,
  createBoardRequest,
} from "../services/boardsAPI";

export const useBoards = () => {
  const [boards, setBoards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBoards();
  }, []);

  const getBoards = async () => {
      setError(null)
      setIsLoading(true);
    try {
      const boardsData = await getBoardsRequest();
      setBoards(boardsData);
    } catch (err) {
        setError(err)    
      console.log(`Error fetching boards:`, err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBoard = async (boardId) => {
    setError(null)
    try {
      await deleteBoardRequest(boardId);
      console.log(`board deleted`);
      getBoards();
    } catch (err) {
        setError(err)
      console.log(`Error deleting board:`, err);
    }
  };

  //update boards

  const updateBoard = async (boardId, updatedBoardData) => {
    setError(null)
    try {
      const boardUpdated = await updateBoardRequest(boardId, updatedBoardData);
      console.log(`board Updated`, boardUpdated);
      getBoards();
    } catch (err) {
        setError(err)
      console.log(`Error updating the board`, err);
    }
  };
  const createNewBoard = async (newBoardData) => {
    setError(null)
    try {
      const newBoard = await createBoardRequest(newBoardData);
      console.log(`board created`, newBoard);
      getBoards();
    } catch (err) {
        setError(err)
      console.log(`Error creating a new board`, err);
    }
  };

  return {
    boards,
    isLoading,
    error,
    getBoards,
    createNewBoard,
    deleteBoard,
    updateBoard,
  };
};
