import axios from "axios";
import axiosInstance from "./axiosInstance";



export const getAllBoardsRequest = async () => {
  const ENDPOINT = `/api/boards`;

  try {
    const response = await axiosInstance.get(ENDPOINT);
    return response.data;

  } catch (err) {
    throw err;
  }
};

export const getBoardRequest = async (boardId) => {
  const ENDPOINT = `/api/boards/${boardId}`;

  try {
    const response = await axiosInstance.get(ENDPOINT);
    return response.data;

  } catch (err) {
    throw err;
  }
};

export const createBoardRequest = async (newBoardData) => {
  const ENDPOINT = `/api/boards`;

  try {
    const response = await axiosInstance.post(ENDPOINT, newBoardData);
    return response.data;

  } catch (err) {
    throw err;
  }
};

export const deleteBoardRequest = async (boardId) => {
  const ENDPOINT = `/api/boards/${boardId}`;

  try {
    const response = await axiosInstance.delete(ENDPOINT);
    return response.data;

  } catch (err) {
    throw err;
  }
};

export const updateBoardRequest = async (boardId, updatedBoardData) => {
  const ENDPOINT = `/api/boards/${boardId}`;

  try {
    const response = await axiosInstance.put(ENDPOINT, updatedBoardData);
    return response.data;
    
  } catch (err) {
    throw err;
  }
};
