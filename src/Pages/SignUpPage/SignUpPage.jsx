import Input from "../../Components/Input/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpPage.scss";
import Button from "../../Components/Button/Button";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users/signup", {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        username: e.target.username.value.toLowerCase(),
        password: e.target.password.value,
        sport: e.target.sport.value,
        skill_level: e.target.skill_level.value
      });

      setSuccessMessage("Signup successful! You can now log in.");

      setTimeout(() => {
        navigate("/login");
      }, 2500);
  
    } catch (error) {
      e.target.reset();
      setError(error.response.data.error.message);
    }
  };

  return (
    <main>
      <section className="signup">
        <div className="signup__headline">
          <h1 className="signup__heading">Get Started</h1>
          <p className="signup__text">
            Connect with local racket sport enthusiasts near you!
          </p>
        </div>
        <div className="signup__container">
        {successMessage && <p className="signup__success">{successMessage}</p>}
          <form action="" className="form" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="first_name"
              label="First name"
              placeholder="First Name"
            />
            <Input
              type="text"
              name="last_name"
              label="Last name"
              placeholder="Last Name"
            />
            <Input type="text" name="email" label="Email" placeholder="Email" />
            <Input
              type="text"
              name="username"
              label="Username"
              placeholder="Username"
            />
            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
            />
            <select name="sport" id="sport">
              <option value="">Please select a sport</option>
              <option value="Tennis">Tennis</option>
              <option value="Squash">Squash</option>
              <option value="Badminton">Badminton</option>
            </select>
            <section className="signup__skill">
            <select name="skill_level" id="skill_level">
              <option value="">Please select a skill level</option>
              <option value="Beginner">Beginner</option>
              <option value="Good">Good</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Semi-Pro">Semi-Pro</option>
            </select>
            </section>
              <Button className="form__btn">
                Sign Up
              </Button>
          </form>
        </div>
        <p className="signup__switch-page">
          Already have an account? <Link to="/login"> Log in</Link>
        </p>
      </section>
    </main>
  );
};

export default SignUpPage;
