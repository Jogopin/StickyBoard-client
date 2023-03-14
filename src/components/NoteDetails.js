import "./NoteDetails.css"
import axios from "axios"
import { useEffect, useState } from "react"

export default function NoteDetails(props){

    const {boardId,noteId,setSelectedNote} = props
    const [note,setNote] =useState(null)


    useEffect(()=>{
        
        axios.get(`${process.env.REACT_APP_API_URL}/api/notes/${boardId}/${noteId}`)
            .then(responseAxios=>{
                
                setNote(responseAxios.data)
            })
            .catch(err=>{
                console.log(`error getting the note`,err)
            })    
    },[])

    const renderNote = () => {

        
      return(<div className="note-details">
        <h1> note details </h1>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
        <ul>
          {note.checklist.map((taskObj) => (
            <li>
              {taskObj.task}
              <spam>{taskObj.isChecked}</spam>
            </li>
          ))}
        </ul>
        <button onClick={()=>{setSelectedNote(null)}}>X</button>
      </div>)
    };

    return <>
        {note ? renderNote() : ""}
    </> 

}