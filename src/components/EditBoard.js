import "./EditBoard.css";
import { useState } from "react";
import axios from "axios";

export default function EditBoard(props) {
  const { boardObj, setBoardObj, updateBoard } = props;

  const [name, setName] = useState(boardObj.name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBoardData = { name };
    updateBoard(boardObj._id, updatedBoardData);
    setBoardObj(null);
  };

  const renderEditBoard = () => {
    return (
      <div className="board-details">
        <form className="board-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />

          <button>done</button>
        </form>
      </div>
    );
  };

  return <>{renderEditBoard()}</>;
}
