import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.scss"

const ProfilePage = () => {

    const [user, setUser] = useState(null);
    const [failedAuth, setFailedAuth] = useState(false);


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
                <div className="profile__banner">
                    <div className="profile__avatar"></div>
                    <h2 className="profile__welcome">
                        Welcome Back, {user.first_name}!
                    </h2>
                    <button className="profile__logout" onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default ProfilePage