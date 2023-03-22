import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export const getBoardsRequest = async () => {
    const ENDPOINT = `${API_URL}/api/boards`;
    
    try {
        const response = await axios.get(ENDPOINT);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const createBoardRequest = async (newBoardData) =>{
    const ENDPOINT = `${API_URL}/api/boards`

    try{
        const response = await axios.post(ENDPOINT,newBoardData)
        return response.data

    }catch(err){
        throw err
    }

}

export const deleteBoardRequest = async (boardId) => {
  const ENDPOINT = `${API_URL}/api/boards/${boardId}`;

  try {
    const response = await axios.delete(ENDPOINT);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateBoardRequest = async (boardId, updatedBoardData) => {
  const ENDPOINT = `${API_URL}/api/boards/${boardId}`;

  try {
    const response = await axios.put(ENDPOINT, updatedBoardData);
    return response.data;
  } catch (err) {
    throw err;
  }
};
