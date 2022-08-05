function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  return (
    <div className="modal">
      <p>Are you shure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={cancelHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
