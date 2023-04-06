
import axiosInstance from "./axiosInstance";

const API_URL = process.env.REACT_APP_API_URL;


export const createNewNoteRequest = async (boardId,NewNoteData) => {
    const ENDPOINT = `${API_URL}/api/notes/${boardId}`;
    
    try {
        const response = await axiosInstance.post(ENDPOINT,NewNoteData);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const getNotesFromBoardRequest = async (boardId)=>{
  const ENDPOINT = `${API_URL}/api/notes/${boardId}`;
    
  try {
      const response = await axiosInstance.get(ENDPOINT);
      return response.data;
  } catch (err) {
      throw err;
  }
}

export const getNoteRequest = async (boardId,noteId) =>{
    const ENDPOINT = `${API_URL}/api/notes/${boardId}/${noteId}`

    try{
        const response = await axiosInstance.get(ENDPOINT)
        return response.data

    }catch(err){
        throw err
    }

}

export const deleteNoteRequest = async (boardId,noteId) => {
  const ENDPOINT = `${API_URL}/api/notes/${boardId}/${noteId}`;

  try {
    const response = await axiosInstance.delete(ENDPOINT);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateNoteRequest = async (boardId,noteId, updatedNoteData) => {
  const ENDPOINT = `${API_URL}/api/notes/${boardId}/${noteId}`;

  try {
    const response = await axiosInstance.put(ENDPOINT, updatedNoteData);
    return response.data;
  } catch (err) {
    throw err;
  }
};
