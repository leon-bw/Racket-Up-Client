import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Carousel.scss"
import actionShot from "../../assets/images/badminton-action-unsplash.jpg"
import tennisClay from "../../assets/images/tennis-clay-unsplash.jpg"
import shuttleCock from "../../assets/images/badminton-shuttlecock-and-racket-on-red-floor-in_12087651.jpg"

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__container">
        <span className="carousel__heading">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="carousel__container">
        <span className="carousel__heading">
          Scroll up
        </span>
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
    <div
      key={card.id}
      className="card"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card__movement"
      ></div>
      <div className="card__grid">
        <p className="card__heading">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Carousel;

const cards = [
  {
    url: "../../assets/images/badminton-action-unsplash.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: {tennisClay},
    title: "Title 2",
    id: 2,
  },
  {
    url: {shuttleCock},
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];