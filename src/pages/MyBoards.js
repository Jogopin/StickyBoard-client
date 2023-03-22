import "./MyBoards.css"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import NewBoard from "../components/NewBoard"
import Modal from "../components/Modal"
import EditBoard from "../components/EditBoard"
import { useBoards } from "../hooks/useBoards"

export default function MyBoards(){

    
    const [selectedBoard, setSelectedBoard] = useState(null)

    const { boards,deleteBoard,createNewBoard,updateBoard} = useBoards()

  

    const renderMyBoardsList= ()=>{
        return (
          <div className="miniboards-container">
            {boards.map((board) => (

                <div className="miniboard" key={board._id}>
                  
                 
                  <Link to={`/myboards/${board._id}`} className="miniboard-link" >
                  
                    <h2>{board.name}</h2>
                  </Link>
                  <button className="miniboard-btn" onClick={()=>{setSelectedBoard(board)}}>edit</button>
                  <button className="miniboard-btn" onClick={()=>{deleteBoard(board._id)}}>delete</button>

                </div>
           
              
             
            ))}
            {/* <Outlet/> */}
          </div>
        );
    }

    return (
      <>
        <h1>My Boards</h1>

        <NewBoard createNewBoard={createNewBoard} />

        {boards ? renderMyBoardsList() : "Loading..."}

        <Modal open={selectedBoard} onClose={setSelectedBoard}>
          <EditBoard
            boardObj={selectedBoard}
            setBoardObj={setSelectedBoard}
            updateBoard ={updateBoard}
          />

          {/* <EditNote noteId={selectedNote} boardId={boardId}  getNotesList={getNotesList} setSelectedNote={setSelectedNote}/> */}
        </Modal>
      </>
    );
}