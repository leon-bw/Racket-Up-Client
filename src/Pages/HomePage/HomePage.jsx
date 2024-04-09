import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__body">
            <h1 className="hero__heading">
              Connecting Racket Sport Enthusiasts for thrilling matches
            </h1>
            <h4 className="hero__subheading">
              Find partners to play your favourite racket sports and elevate
              your game. Join our community today!
            </h4>
          </div>
          <div className="hero__btns">
            <Link to="/signup">
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.9, backgroundColor: ["#F3B416"] }}
                className="hero__btn hero__btn--join"
              >
                Join
              </motion.a>
            </Link>
            <Link to="/">
              <motion.a
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.9, backgroundColor: ["#F3B416"] }}
                className="hero__btn hero__btn--learn-more"
              >
                Learn More
              </motion.a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
