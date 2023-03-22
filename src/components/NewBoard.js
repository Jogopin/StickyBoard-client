import { useState } from "react";

export default function NewBoard(props) {
  const { createNewBoard } = props;

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBoardData = {
      name,
    };
    createNewBoard(newBoardData);
    setName("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
