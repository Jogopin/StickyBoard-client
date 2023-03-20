import "./EditBoard.css"
import {useState } from "react"
import axios from "axios"

export default function EditBoard(props){

    const {boardObj,setBoardObj,getMyBoards} = props
    
    const [name,setName]=useState(boardObj.name)
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const boardUpdated = {name}
        
        axios.put(`${process.env.REACT_APP_API_URL}/api/boards/${boardObj._id}`,boardUpdated)
          .then(responseAxios=>{
            console.log(`updated correctly`,responseAxios.data)
          })
          .catch(err=>{
            console.log(`error updating the board`,err)
          })
          .finally(()=>{
            getMyBoards()
            setBoardObj(null)
          })
       
        
    }

    
 
   

    const renderEditBoard = () => {
        
      return (
        <div className="board-details">
          <form className="board-form" onSubmit={handleSubmit}>
            
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              required
            />  

            <button>done</button>
          </form>       
          
        </div>
      );
    };

    return <>
        {renderEditBoard()}
    </> 

}