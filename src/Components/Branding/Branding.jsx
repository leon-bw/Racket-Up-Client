import logo from "../../assets/logo/serving.svg";
import "./Branding.scss";

const Branding = () => {
  return (
    <>
      <div className="brand">
        <div className="brand__container">
          <img src={logo} alt="logo" className="brand__logo" />
          <h3 className="brand__name">racket up</h3>
        </div>
      </div>
    </>
  );
};

export default Branding;
