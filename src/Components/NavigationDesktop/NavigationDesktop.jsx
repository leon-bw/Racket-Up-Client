import { motion } from "framer-motion";
import "./NavigationDesktop.scss";
import { links } from "../Links/Links";
import Branding from "../Branding/Branding";

const NavigationDesktop = () => {
  return (
    <>
      <nav className="navigation--desktop">
        <div className="navigation__container">
          <Branding />
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
      </nav>
    </>
  );
};

export default NavigationDesktop;
