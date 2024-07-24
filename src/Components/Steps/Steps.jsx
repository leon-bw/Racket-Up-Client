import "./Steps.scss";
import Anchor from "../Anchor/Anchor";

const Steps = () => {
  return (
    <article className="steps">
      <div className="steps__container">
        <section className="steps__connect">
          <h2 className="steps__connect-heading">
            Find and Connect with Other Players for a game
          </h2>
          <Anchor route={"/signup"} className="steps__btn">Get Started</Anchor>
        </section>
        <ul className="list" id="steps">
          <li className="list__step-item">
            <h3 className="list__heading">Step One</h3>
            <p className="list__text">
              Create an account and set up your profile to set your preferences
            </p>
          </li>
          <li className="list__step-item">
            <h3 className="list__heading">Step Two</h3>
            <p className="list__text">
              Search for matches based on skill level and
              availability
            </p>
          </li>
          <li className="list__step-item">
            <h3 className="list__heading">Step Three</h3>
            <p className="list__text">
              Connect with other players, accept game invitations and book
              courts for matches or practice sessions
            </p>
          </li>
          <li className="list__step-item">
            <h3 className="list__heading">Step Four</h3>
            <p className="list__text">
              Enjoy the sport you love and improve your skills while making
              new connections
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Steps;
