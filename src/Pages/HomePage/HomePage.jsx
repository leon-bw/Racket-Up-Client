import { motion } from "framer-motion";
import Hero from "../../Components/Hero/Hero";
import Steps from "../../Components/Steps/Steps";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Steps />
      <Carousel />
      <Footer />
    </main>
  );
};

export default HomePage;
