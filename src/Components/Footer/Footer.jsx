import React from "react";
import Branding from "../Branding/Branding";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <Branding />
          <p className="footer__text">Racket Up. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
