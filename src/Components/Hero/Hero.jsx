import Button from "../Button/Button";
import court from "../../assets/images/court-overhead-unsplash.jpg";
import { Link } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__body">
          <h1 className="hero__heading">
            Connecting Racket Sport Enthusiasts for thrilling matches
          </h1>
          <h4 className="hero__subheading">
            Find partners to play your favourite racket sports and elevate your
            game. Join our community today!
          </h4>
          <div className="hero__btns">
          <Link to="/signup">
            <Button className="hero__join">Join</Button>
          </Link>
          <Button className="hero__learn">Learn More</Button>
          </div>
        </div>
        <div className="hero__img">
          <img
            className="hero__image"
            src={court}
            alt="tennis court from birds eye view"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
