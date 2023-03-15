import axios from "axios"
import { useEffect, useState } from "react"

export default function EditNote(props){

    const {boardId,noteId,setSelectedNote, getNotesList} = props
    const [note,setNote] =useState({
        title:"",
        description:"",
        checklist:[{task:"",isChecked:false}],
        
    })


    useEffect(()=>{
        
        axios.get(`${process.env.REACT_APP_API_URL}/api/notes/${boardId}/${noteId}`)
            .then(responseAxios=>{
                
                setNote(responseAxios.data)
            })
            .catch(err=>{
                console.log(`error getting the note`,err)
            })    
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`${process.env.REACT_APP_API_URL}/api/notes/${boardId}/${noteId}`,note)
          .then(responseAxios=>{
            console.log(`updated correctly`,responseAxios.data)
          })
          .catch(err=>{
            console.log(`error updating the note`,err)
          })
          .finally(()=>{
            getNotesList()
          })
        
    }
    const handleOnChange = (e) => {
        e.preventDefault()

        setNote(prevState=>{
            
            return{...prevState, [e.target.name]:e.target.value}
        })

    }

    const renderNote = () => {
        
      return (
        <div className="note-details">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              autoComplete="off"
              value={note.title}
              onChange={handleOnChange}
              required
            />
            <textarea
              rows={2}
              name="description"
              autoComplete="off"
              value={note.description}
              onChange={handleOnChange}
            />
            <button>done</button>
          </form>

          <button
            onClick={(e) => {
              e.preventDefault()
              setSelectedNote(null);
            }}
          >
            X
          </button>
        </div>
      );
    };

    return <>
        {note ? renderNote() : ""}
    </> 

}