import { motion } from "framer-motion";
import Hero from "../../Components/Hero/Hero";
import Steps from "../../Components/Steps/Steps";
import Carousel from "../../Components/Carousel/Carousel";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Steps />
      <Carousel />
    </main>
  );
};

export default HomePage;
