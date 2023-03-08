import "./Board.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Board(){
    const API_URL = process.env.REACT_APP_API_URL

    const {boardId} = useParams()
    const [boardObj,setBoardObj]=useState(null)

    useEffect(()=>{
        axios.get(`${API_URL}/api/boards/${boardId}`)
            .then(responseAxios=>{
                setBoardObj(responseAxios.data)
            })
            .catch(err=>{
                console.log("there has been an error getting the board",err)
            })
    },[])

    const renderBoard=() => {
        return (<div className="board">
            {boardObj.notes.map(note=>(
                <div className="note" key={note._id}>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                </div>
            ))}
        </div>)
    }
    return<>
         {boardObj && <h2>{boardObj.name}</h2>}
        {boardObj ? renderBoard() : "laoding..."}
    </>
}