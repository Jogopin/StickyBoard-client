import "./EditNote.css"
import axios from "axios"
import { useEffect, useState } from "react"

export default function EditNote(props){

    const {boardId,noteId,setSelectedNote, getNotesList} = props
    
    const [title,setTitle]=useState("")
    const [description,setDescription]= useState("")
    const [checklist, setChecklist]=useState(null)

    useEffect(()=>{
        
        axios.get(`${process.env.REACT_APP_API_URL}/api/notes/${boardId}/${noteId}`)
            .then(res=>{
                
                
                setTitle(res.data.title)
                setDescription(res.data.description)
                setChecklist(res.data.checklist)

            })
            .catch(err=>{
                console.log(`error getting the note`,err)
            })    
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const noteUpdated = {title,description,checklist}
        
        axios.put(`${process.env.REACT_APP_API_URL}/api/notes/${boardId}/${noteId}`,noteUpdated)
          .then(responseAxios=>{
            console.log(`updated correctly`,responseAxios.data)
          })
          .catch(err=>{
            console.log(`error updating the note`,err)
          })
          .finally(()=>{
            getNotesList()
            setSelectedNote(null)
          })
        
    }
    const handleDeleteNote = (e) =>{

      axios.delete(`${process.env.REACT_APP_API_URL}/api/notes/${boardId}/${noteId}`)
      .then(responseAxios=>{
        console.log(`note deleted correctly`,responseAxios.data)
        setSelectedNote(null)
      })
      .catch(err=>{
        console.log(`error deleting the note`,err)
      })
      .finally(()=>{
        getNotesList()
      })
      
    }
    const handleOnChangeChecklist = (e,i) =>{
      
      const{name,value,checked} = e.target

      //there are some errors when i checked the box, need to research more on that
      setChecklist(prevState=>{
        
        const newChecklist=[...prevState]

        newChecklist[i]={...checklist[i], [name]: name === "isChecked" ? checked : value}
        return newChecklist
        
      })
    }

    const handlePlusClick =(e)=>{
      e.preventDefault()

      setChecklist(prevState=>{
        return [...prevState, {task:"",isChecked:false} ]
        
      })
    }
    
    const handleDeleteTask = (e,i)=>{
      e.preventDefault()

      setChecklist(prevState=>{

        const newChecklist= [...prevState]
        newChecklist.splice(i,1)
               
        return newChecklist
      })
    }

    const renderNote = () => {
        
      return (
        <div className="note-details">
          <form className="note-form" onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="title"
              autoComplete="off"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              required
            />

            
            <textarea
              rows={2}
              name="description"
              autoComplete="off"
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
            />

            <div className="checklist-container" >

            {checklist ? checklist.map((taskObj,index)=>{
              return<div className="task-container" key={index}>
                <input type="checkbox" name="isChecked" checked={taskObj.isChecked}  onChange={(e)=>{handleOnChangeChecklist(e,index)}}/>
                <input type="text" name="task" value={taskObj.task} onChange={(e)=>{handleOnChangeChecklist(e,index)}}/>
                <button onClick={(e)=>{handleDeleteTask(e,index)}}>x</button>
              </div>
            }): ""}
            </div>
           
              <button onClick={handlePlusClick}>+</button>

          
                

            
            <button>done</button>
          </form>

          <button
            className="btn-x"
            onClick={(e) => {
              e.preventDefault()
              setSelectedNote(null);
            }}
          >
            -
          </button>
         
          <button
            className="btn-delete"
            onClick={handleDeleteNote}
          >
            delete
          </button>
        </div>
      );
    };

    return <>
        {renderNote()}
    </> 

}