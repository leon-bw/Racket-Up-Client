import { motion } from "framer-motion";
import "./Loader.scss";

const Loader = () => {
  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  return (
    <div className="loader">
      <div className="loader__container">
        <h2 className="loader__heading">Loading Profile</h2>
        <motion.div
          transition={{
            staggerChildren: 0.25,
          }}
          initial="initial"
          animate="animate"
          className="loader__bar"
        >
          <motion.div variants={variants} className="loader__item" />
          <motion.div variants={variants} className="loader__item" />
          <motion.div variants={variants} className="loader__item" />
          <motion.div variants={variants} className="loader__item" />
          <motion.div variants={variants} className="loader__item" />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
