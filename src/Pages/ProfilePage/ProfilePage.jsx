import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProfilePage.scss";
import DatePicker from "react-date-picker";
import Button from "../../Components/Button/Button";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import Loader from "../../Components/Loader/Loader";
import Level from "../../Components/Level/Level";
import { useParams } from "react-router";

const ProfilePage = () => {
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(["01:00", "23:00"]);
  const [level, setLevel] = useState("");
  const [matches, setMatches] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filters = {
      level: level,
      startTime: time[0],
      endTime: time[1],
      date: date,
    };
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/matches/find-matches`,
        filters
      );
      setMatches(data.data);
      console.log(data);
      navigate("/find-matches", {state: {filteredMatches: data.data}})
    } catch (error) {}
  };

  useEffect(() => {
    const getProfile = async () => {
      const token = sessionStorage.getItem("AuthToken");

      if (!token) {
        return setFailedAuth(true);
      }

      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/users/profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
        setFailedAuth(true);
      }
    };
    getProfile();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("AuthToken");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    setTimeout(() => {
      navigate("/");
    }, 1800);

    return (
      <main className="profile">
        <div className="profile__container">
          <p className="profile__logged-out">
            You have been logged out! You will be redirected to the Home Page
          </p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="profile">
        <Loader />
      </main>
    );
  }

  return (
    <main>
      <form className="profile" onSubmit={handleSubmit}>
        <div className="profile__container">
          <div className="profile__body">
            <div className="profile__banner">
              <div className="profile__avatar">{user.first_name[0]}</div>
              <h2 className="profile__welcome">
                Welcome Back, {user.first_name} {user.last_name}!
              </h2>
              <Button className="profile__logout">
                <FaArrowRightFromBracket
                  className="profile__icon"
                  onClick={handleLogout}
                />
              </Button>
            </div>
            <div className="profile__header">
            <section className="profile__sport">
              <h3 className="profile__heading">Sport: </h3>
              <h4 className="profile__chosen-sport">{user.sport}</h4>
              <Button className="profile__edit">
                <MdModeEdit />
              </Button>
            </section>
            <section className="profile__skill">
              <h3 className="profile__heading">Skill Level:</h3>
              <Level setLevel={setLevel} />
            </section>
            </div>
            <section className="profile__find-game">
              <h3 className="profile__heading">Search for availability</h3>
              <section className="profile__available">
                <h4 className="profile__date-heading">Set Date</h4>
                <div className="profile__date">
                  <DatePicker onChange={setDate} value={date} />
                </div>
                <div className="profile__time">
                  <h4 className="profile__time-heading">Set Time</h4>
                  <TimeRangePicker onChange={setTime} value={time} />
                </div>
              </section>
              <Button className="profile__game">Find a Game</Button>
            </section>
          </div>
        </div>
      </form>
      <section>
        <ul className="matches-list">
          {matches &&
            matches.map((match) => {
              return (
                <li className="matches-list__item" key={match.id}>
                  <div className="matches-list__body">
                    <div className="matches-list__details">
                      <h3 className="matches-list__heading">Sport</h3>
                      <p className="matches-list__name">{match.name}</p>
                      <div className="matches-list__info">
                        <h3 className="matches-list__heading">Location</h3>
                        <p className="matches-list__text">{match.location}</p>
                      </div>
                      <div className="matches-list__info">
                        <h3 className="matches-list__heading">Level</h3>
                        <p className="matches-list__text">
                          {match.skill_level}
                        </p>
                      </div>
                      <div className="matches-list__info">
                        <h3 className="matches-list__heading">Availability</h3>
                        <p className="matches-list__text">
                          {match.availability}
                        </p>
                      </div>
                    </div>
                    <div className="matches-list__info">
                      <h4 className="matches-list__heading">Players</h4>
                      {!match.users[1] ? (
                        <p>Looking for a game?</p>
                      ) : (
                        <p className="matches-list__text">
                          {match.users[0].first_name} {match.users[0].last_name}{" "}
                          <p className="matches-list__vs">VS</p>
                          {match.users[1].first_name} {match.users[1].last_name}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </main>
  );
};

export default ProfilePage;
