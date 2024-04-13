import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../../Components/Hero/Hero";
import Steps from "../../Components/Steps/Steps";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Steps />
    </main>
  );
};

export default HomePage;
