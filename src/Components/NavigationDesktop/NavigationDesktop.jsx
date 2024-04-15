import { motion } from "framer-motion";
import "./NavigationDesktop.scss";
import { links } from "../Links/Links";
import Branding from "../Branding/Branding";
import Anchor from "../Anchor/Anchor";

const NavigationDesktop = () => {
  return (
    <>
      <nav className="navigation--desktop">
        <div className="navigation__container">
          <div className="navigation__bar">
          <div className="navigation__branding">
          <Branding />
          </div>
          <ul className="navigation__menu">
            {links.map((link) => {
              const { Icon, href, title } = link;
              return (
                <li className="navigation__item" key={link.title}>
                  <a href={href} className="navigation__link">
                    <Icon className="navigation__icon"/>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
          </div>
          <div className="navigation__btns">
            <Anchor className="navigation__signup" route={"/signup"}>Sign Up</Anchor>
            <Anchor route={"/login"} >Log In</Anchor>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationDesktop;
