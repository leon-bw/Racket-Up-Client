import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./MatchCard.scss";
import Anchor from "../../Components/Anchor/Anchor";
import { MdLocationOn } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { MdEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { FaCircleUser } from "react-icons/fa6";

const MatchCard = () => {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const checkStatus = (status) => {
    if (status !== "Available") {
      return "match__text match__text--unavailable";
    } else {
      return "match__text match__text--available"
    }
  };

  return (
    <section className="matchlist">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="match"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="match__container"
        >
          <div
            style={{ transform: "translateZ(50px)" }}
            className="match__body"
          >
            <div className="match__details">
              <div className="match__creator">
                <div className="match__author-avatar">J</div>
                <div className="match__author">
                  <p className="match__author-name">
                    <span className="match__icon">
                      <FaCircleUser />
                    </span>
                    John
                  </p>
                  <p className="match__author-level">
                    <span className="match__icon">
                      <ImStatsBars />
                    </span>{" "}
                    {match.skill_level}
                  </p>
                </div>
              </div>
              <div className="match__info">
                <p className="match__text">
                  <span className="match__icon">
                    <MdLocationOn />
                  </span>{" "}
                  {match.location}
                </p>
                <p className="match__text">
                  <span className="match__icon">
                    <MdTimer />
                  </span>
                  2hrs - 17:00 - 19:00
                </p>
                <p className={checkStatus(match.availability)}>
                  <span className="match__icon">
                  {!match.users[1] ? ( <MdEventAvailable /> ) : ( <CgUnavailable /> )}
                  </span>{" "}
                  {match.availability}
                </p>
              </div>
              <div className="match__select">
                <Anchor route="/join" className="match__join">
                  Let's Play
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MatchCard;
