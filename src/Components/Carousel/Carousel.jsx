import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./Carousel.scss";
import PictureCard from "../PictureCard/PictureCard";
import actionShot from "../../assets/images/tennis-serve-unsplash.jpg";
import tennisClay from "../../assets/images/tennis-clay-unsplash.jpg";
import communityShot from "../../assets/images/tennis-community-unsplash.jpg";
import tennisLady from "../../assets/images/tennis-lady-playing-unsplash.jpg";
import tennisBall from "../../assets/images/tennis-ball-unsplash.jpg";

const Carousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const images = [
    {
      path: communityShot,
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
      path: tennisBall,
      title: "Schedule Matches",
      id: 4,
    },
    {
      path: actionShot,
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
