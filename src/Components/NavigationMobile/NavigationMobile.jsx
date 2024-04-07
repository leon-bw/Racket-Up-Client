import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "../Links/Links";
import "./NavigationMobile.scss";

const NavigationMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="navigation--mobile">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} color="#fff"/>
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
                      className={
                        "navigation__link"
                      }
                      href={link.href}
                    >
                      <span className="navigation__item">{link.title}</span>
                      <Icon className="navigation__icon" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationMobile;
