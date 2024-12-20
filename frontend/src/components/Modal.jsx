// eslint-disable-next-line react/prop-types
function Modal({ children, onClose }) {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog className="modal" open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
