import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Carousel.scss";
import PictureCard from "../PictureCard/PictureCard";
import actionShot from "../../assets/images/badminton-action-unsplash.jpg";
import tennisClay from "../../assets/images/tennis-clay-unsplash.jpg";
import shuttleCock from "../../assets/images/badminton-shuttlecock-and-racket-on-red-floor-in_12087651.jpg";
import tennisLady from "../../assets/images/tennis-lady-playing-unsplash.jpg";
import tennisCourt from "../../assets/images/tennis-court-unsplash.jpg";

const Carousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const images = [
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

  return (
    <div className="carousel">
      <div className="carousel__container">
        <h2 className="carousel__heading">Connect and Play</h2>
      </div>
      <section ref={targetRef} className="horizontal">
        <div className="horizontal__container">
          <motion.div style={{ x }} className="horizontal__card">
            {images.map((image) => {
              return <PictureCard card={image} key={image.id} />;
            })}
          </motion.div>
        </div>
      </section>
      <div className="carousel__container">
        <h2 className="carousel__heading">Enjoy the Game</h2>
      </div>
    </div>
  );
};

export default Carousel;
