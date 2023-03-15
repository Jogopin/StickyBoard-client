import "./Board.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NewNote from "../components/NewNote"
import NoteDetails from "../components/NoteDetails"
import EditNote from "../components/EditNote"


export default function Board(){
    const API_URL = process.env.REACT_APP_API_URL

    const {boardId} = useParams()
    const [notesList,setNotesList]=useState(null)
    const [selectedNote,setSelectedNote]= useState(null)

    //Get the notes of the board
    const getNotesList = ()=>{

        axios.get(`${API_URL}/api/notes/${boardId}`)
        .then(responseAxios=>{
            setNotesList(responseAxios.data)
            console.log("getNotesList responseAxios",responseAxios)
        })
        .catch(err=>{
            console.log("there has been an error getting the notes of the board",err)
        })
        
    }
    
    useEffect(()=>{
        getNotesList()
    },[])
    
  
    //Render the notes
    const renderNotes=() => {
        return (<div className="board">
            {notesList.map(note=>(
                <div className="note" key={note._id}>
                    <h3>{note.title}</h3>
                    <p >{note.description}</p>
                    <button onClick={()=>{setSelectedNote(note._id)}}>...</button>
                </div>
            ))}
        </div>)
    }
    
    return<>
         
        <NewNote boardId={boardId} getNotesList={getNotesList}/>

        {notesList ? renderNotes() : ""}

        {/* {selectedNote ? <NoteDetails noteId={selectedNote} boardId={boardId} setSelectedNote={setSelectedNote}/> : ""} */}
        
        {selectedNote ? <EditNote noteId={selectedNote} boardId={boardId} setSelectedNote={setSelectedNote} getNotesList={getNotesList}/> : ""}
        
    </>
}