import { motion } from "framer-motion";
import "./Button.scss";

const Button = ({ children, className }) => {
  return (
    <motion.button
      className="btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
