import "./Modal.css";
export default function Modal(props) {
  const { open, onClose, children } = props;

  if (!open) return null;

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          className="modal-close-btn"
          onClick={() => {
           
            onClose(null);
          }}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}
