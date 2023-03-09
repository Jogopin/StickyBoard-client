import axios from "axios"
import { useState } from "react"

export default function NewBoard(props){

    const {getMyBoards} = props

    const API_URL = process.env.REACT_APP_API_URL

    const[name,setName] = useState("")

    const handleSubmit = (e) =>{

        e.preventDefault()
        const newBoardData ={
            name
        }
        
        axios.post(`${API_URL}/api/boards`,newBoardData)
            .then(responseAxios=>{
                getMyBoards()
                console.log("New board created")
            })
            .catch(err=>{
                console.log("there has been an error creating hte board",err)
            })  

        

    }

    return (
      <div>
        <form onSubmit={handleSubmit} >
          <input
            required
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">New Board</button>
        </form>
      </div>
    );
}