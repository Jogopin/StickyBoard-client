import "./MyBoards.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import NewBoard from "../components/NewBoard"

export default function MyBoards(){

    const API_URL = process.env.REACT_APP_API_URL
    const [myBoardsList,setMyBoardsList] = useState(null)
    
    // Get the boards
    useEffect(()=>{
     getMyBoards()
    },[])

    const getMyBoards = ()=>{
      axios.get(`${API_URL}/api/boards`)
        .then(responseAxios=>{
            
            setMyBoardsList(responseAxios.data)
        })
        .catch(err=>{
            console.log("there has been an error getting the boards",err)
        })  
      
      }
    
    const handleDelete =(boardId)=>{

      axios.delete(`${API_URL}/api/boards/${boardId}`)
        .then(responseAxios=>{
          console.log(`board and its notes deleted`,responseAxios)
        })
        .catch(err=>{
          console.log("error deleting the board and its notes",err)
        })
        .finally(()=>{
          getMyBoards()
        })
      
    }

    const handleEdit =(boardId)=>{
      console.log(`board ${boardId} edit`)
    }

    const renderMyBoardsList= ()=>{
        return (
          <div className="miniboards-container">
            {myBoardsList.map((board) => (

                <div className="miniboard" key={board._id}>
                  
                    <h2>{board.name}</h2>
                 
                  <Link to={`/myboards/${board._id}`} >
                  <button><b>...</b></button>
                  </Link>
                  <button onClick={()=>{handleEdit(board._id)}}>edit</button>
                  <button onClick={()=>{handleDelete(board._id)}}>delete</button>

                </div>
           
              
             
            ))}
            {/* <Outlet/> */}
          </div>
        );
    }

    return (
        <>
            <h1>My Boards</h1>

            <NewBoard getMyBoards={getMyBoards} />

            {myBoardsList ? renderMyBoardsList() : "Loading..."}


            
        </>
    )
}