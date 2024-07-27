import court from "../../assets/images/court-overhead-unsplash.jpg";
import Anchor from "../Anchor/Anchor";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__body">
          <h1 className="hero__heading">
            Connect and Compete with Fellow Tennis Players
          </h1>
          <h4 className="hero__subheading">
            Elevate your tennis experience. Connect, play, and improve with
            fellow tennis fans, join our community!
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
