import { motion } from "framer-motion";
import "./NavigationDesktop.scss";
import { links } from "../Links/Links";
import Branding from "../Branding/Branding";
import Button from "../Button/Button";

const NavigationDesktop = () => {
  return (
    <>
      <nav className="navigation--desktop">
        <div className="navigation__container">
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
          <div className="navigation__btns">
            {/* <Button>Sign Up</Button>
            <Button>Log In</Button> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationDesktop;
