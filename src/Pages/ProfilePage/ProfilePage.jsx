import axios from "axios";
// import Modal from "react-modal";
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
import Modal from "../../Components/Modal/Modal";
import Sport from "../../Components/Sport/Sport";
import Location from "../../Components/Location/Location";

const ProfilePage = () => {
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  // const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState(["01:00", "23:00"]);
  const [level, setLevel] = useState("");
  const [sport, setSport] = useState("");
  const [location, setLocation] = useState("");
  const [matches, setMatches] = useState(null);
  const [error, setError] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  const [newSport, setNewSport] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.sport.value)

    const newGame = {
      user_id_1: user.id,
      sport_id: e.target.sport.value,
      skill_level: e.target.skill_level.value,
      court_id: e.target.location.value
    };
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/matches`, newGame
      );
      setMatches(data.data);
      console.log(data);
      navigate("/matches");
    } catch (error) {
      console.log(error);
    }
  };
  // { state: { filteredMatches: data.data } }

  // const handleUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userId = user.id;
  //     const { data } = await axios.patch(
  //       `http://localhost:8080/profile/${userId}`,
  //       { sport }
  //     );
  //     setUser({ ...user, sport: data.sport });
  //     setSport(data.data);
  //   } catch (error) {
  //     console.log(error);
  //     setError(error.response.data.error);
  //   }
  // };

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
              {/* <section className="profile__sport">
                <h3 className="profile__heading">Sport: </h3>
                <Sport className="profile__sport-select" setSport={setSport} usersSport={user.sport}/>
              </section> */}
              <section className="profile__skill">
                <h3 className="profile__heading">Skill Level: {user.skill_level}</h3> 
                {/* <Level className="profile__level" setLevel={setLevel} /> */}
              </section>
            </div>
            <div className="">
            <section className="profile__location">
                <h3 className="profile__heading">Court:</h3> 
                <Location className="profile__location-select" setLocation={setLocation} />
              </section>
            </div>
            <section className="profile__find-game">
              {/* <section className="profile__available"> */}
                {/* <h4 className="profile__date-heading">Set Date</h4>
                <div className="profile__date">
                  <DatePicker onChange={setDate} value={date} />
                </div> */}
              {/* </section> */}
              <Button type="submit" className="profile__game">Create a Game</Button>
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
                      <p className="matches-list__name">
                        {match.users[0].sport}
                      </p>
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
                          VS {match.users[1].first_name}{" "}
                          {match.users[1].last_name}{" "}
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
