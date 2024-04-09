import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "../Links/Links";
import "./NavigationMobile.scss";
import Branding from "../Branding/Branding";
import { Link } from "react-router-dom";

const NavigationMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <nav ref={ref} className="navigation--mobile">
      <div className="navigation__menu">
        <Branding />
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="navigation__body"
          >
            <ul className="navigation__list">
              {links.map((link, idx) => {
                const { Icon } = link;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={link.title}
                    className="navigation__list-item"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={"navigation__link"}
                      href={link.href}
                    >
                      <span className="navigation__item">{link.title}</span>
                      <Icon className="navigation__icon" />
                    </a>
                  </motion.li>
                );
              })}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen((prev) => !prev)}
                className="navigation__btns"
              >
                <Link to="/signup">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{
                      scale: 0.9,
                      backgroundColor: ["#F3B416"],
                      color: ["#202C39"],
                    }}
                    className="navigation__btn navigation__btn--signup"
                  >
                    Sign Up
                  </motion.a>
                </Link>
                <Link to="/login">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9, backgroundColor: ["#F3B416"] }}
                    className="navigation__btn navigation__btn--login"
                  >
                    Login
                  </motion.a>
                </Link>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationMobile;
