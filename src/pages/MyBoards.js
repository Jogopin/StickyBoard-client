import axios from "axios"
import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

export default function MyBoards(){

    const API_URL = process.env.REACT_APP_API_URL
    const [myBoardsList,SetMyBoardsList] = useState(null)

    useEffect(()=>{
      axios.get(`${API_URL}/api/boards`)
        .then(responseAxios=>{
            console.log(responseAxios)
            SetMyBoardsList(responseAxios.data)
        })
        .catch(err=>{
            console.log("there has been an error getting the boards",err)
        })  
    },[])

    const renderMyBoardsList= ()=>{
        return (
          <div>
            {myBoardsList.map((board) => (
              
                <Link to={`/myboards/${board._id}`} key={board._id}>
                  <div >
                    <h2>{board.name}</h2>
                  </div>
                </Link>
             
            ))}
            <Outlet/>
          </div>
        );
    }

    return (
        <>
            <h1>My Boards</h1>
        
            {myBoardsList ? renderMyBoardsList() : "Loading..."}
            
        </>
    )
}