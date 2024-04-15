import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Carousel.scss";
import actionShot from "../../assets/images/badminton-action-unsplash.jpg";
import tennisClay from "../../assets/images/tennis-clay-unsplash.jpg";
import shuttleCock from "../../assets/images/badminton-shuttlecock-and-racket-on-red-floor-in_12087651.jpg";
import tennisLady from "../../assets/images/tennis-lady-playing-unsplash.jpg";
import tennisCourt from "../../assets/images/tennis-court-unsplash.jpg";

const cards = [
  {
    path: actionShot,
    title: "Join Our Community",
    id: 1,
  },
  {
    path: tennisLady,
    title: "Discover new opponents",
    id: 2,
  },
  {
    path: tennisClay,
    title: "Improve your skills",
    id: 3,
  },
  {
    path: tennisCourt,
    title: "Schedule Matches",
    id: 4,
  },
  {
    path: shuttleCock,
    title: "Start playing today",
    id: 5,
  },
];

const Carousel = () => {
  
  return (
    <div className="carousel">
      <div className="carousel__container">
        <span className="carousel__heading">Connect and Play</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="carousel__container">
        <span className="carousel__heading">Enjoy the Game</span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="horizontalscroll">
      <div className="horizontalscroll__container">
        <motion.div style={{ x }} className="horizontalscroll__card">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
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

export default Carousel;
