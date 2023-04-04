const Note = (props) => {
  const { title, description, _id, setSelectedNote } = props;
  
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        onClick={() => {
          setSelectedNote(_id);
        }}
      >
        ...
      </button>
    </div>
  );
};

export default Note;
