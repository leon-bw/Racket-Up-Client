const Modal = ({ open, close, children }) => {
  return (
    <div
      className={`modal ${open ? "modal--show" : "modal--hide"}`}
      onClick={close}
    >
      <div
        className={`modal__container ${
          open ? "modal__container--show" : "modal__container--hide"
        } `}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
