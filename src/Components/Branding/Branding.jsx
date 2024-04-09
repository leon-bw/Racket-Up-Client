import logo from "../../assets/logo/serving.svg";
import "./Branding.scss";
import { Link } from "react-router-dom";

const Branding = () => {
  return (
    <>
      <div className="brand">
        <div className="brand__container">
          <Link to="/">
          <img src={logo} alt="logo" className="brand__logo" />
          <h3 className="brand__name">racket up</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Branding;
