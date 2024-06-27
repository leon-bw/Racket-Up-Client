import "./PictureCard.scss";

const PictureCard = ({ card }) => {
  return (
    <div key={card.id} className="card">
      <div
        style={{
          backgroundImage: `url(${card.path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card__movement"
      ></div>
      <div className="card__grid">
        <p className="card__heading">{card.title}</p>
      </div>
    </div>
  );
};

export default PictureCard;
