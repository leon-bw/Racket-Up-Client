import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.scss"
import DatePicker from 'react-date-picker';
import Button from "../../Components/Button/Button";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import 'react-clock/dist/Clock.css';

const ProfilePage = () => {

    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(['10:00', '11:00']);


  useEffect(() => {
    const getProfile = async () => {
      const token = sessionStorage.getItem("AuthToken");

      if (!token) {
        return setFailedAuth(true);
      }

      try {
        const { data } = await axios.get(
          "http://localhost:8080/api/users/profile",
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

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main className="Profile">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="Profile">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
        <div className="profile">
            <div className="profile__container">
                <div className="profile__body">
                <div className="profile__banner">
                    <div className="profile__avatar">{user.first_name[0]}</div>
                    <h2 className="profile__welcome">
                        Welcome Back, {user.first_name} {user.last_name}!
                    </h2>
                    <Button className="profile__logout" onClick={handleLogout}>
                        Log out
                    </Button>
                </div>
                    <section className="profile__find-game">
                        <div className="profile__date">
                            <DatePicker onChange={setDate} value={date} />
                        </div>
                        <div className="profile__time">
                            <TimeRangePicker onChange={setTime} value={time} />
                        </div>
                        <Button className="profile__game">
                            Find a Game
                        </Button>
                    </section>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ProfilePage