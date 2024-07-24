import court from "../../assets/images/court-overhead-unsplash.jpg";
import Anchor from "../Anchor/Anchor";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__body">
          <h1 className="hero__heading">
            Connecting Tennis Enthusiasts for thrilling matches
          </h1>
          <h4 className="hero__subheading">
            Connect with tennis enthusiasts and elevate your game. Join our
            community and find a match today!
          </h4>
          <div className="hero__btns">
            <Anchor route="/signup" className="hero__join">
              Join
            </Anchor>
            <Anchor route="/#steps" className="hero__learn">
              Learn More
            </Anchor>
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
