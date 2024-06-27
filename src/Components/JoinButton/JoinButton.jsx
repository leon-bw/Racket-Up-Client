import "./JoinButton.scss";

const JoinButton = ({ children, onSelect }) => {
  return (
    <button className="player__add" onClick={onSelect}>
      {children}
    </button>
  );
};

export default JoinButton;
