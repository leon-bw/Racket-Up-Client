import { motion } from "framer-motion";
import "./Anchor.scss";

const Anchor = ({ children, className, route }) => {
  return (
    <motion.a
      className={`anchor ${className}`}
      href={route}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
};

export default Anchor;
