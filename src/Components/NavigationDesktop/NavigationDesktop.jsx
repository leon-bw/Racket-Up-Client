import { motion } from "framer-motion";
import "./NavigationDesktop.scss";
import { links } from "../Links/Links";
import logo from "../../assets/logo/serving.svg";

const NavigationDesktop = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation__container">
          <img src={logo} alt="logo" className="navigation__logo" />
          <h3 className="navigation__branding">racket up</h3>
          <ul className="navigation--desktop">
            {links.map((link) => {
              const { Icon, href, title } = link;
              return (
                <li className="navigation__item">
                  <a href={href} className="navigation__link">
                    <Icon />
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationDesktop;
