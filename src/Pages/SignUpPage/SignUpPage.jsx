import Input from "../../Components/Input/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axios } from "axios";
import "./SignUpPage.scss";

const SignUpPage = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users/sign-up", {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
        sport: e.target.sport.value,
        skill_level: e.target.skill_level.value,
        role: "user",
      });
      navigate("/login");
    } catch (error) {
      e.target.reset();
      setError(error.response.data);
    }
  };

  return (
    <main>
      <div className="signup__headline">
      <h1 className="signup__heading">Get Started</h1>
      <p className="signup__text">Connect with local racket sport enthusiasts near you!</p>
      </div>
    <form action="" className="form" onSubmit={handleSubmit}>
      <Input type="text" name="first_name" label="First name" placeholder="First Name"/>
      <Input type="text" name="last_name" label="Last name" placeholder="Last Name"/>
      <Input type="text" name="email" label="Email" placeholder="Email"/>
      <Input type="text" name="email" label="Username" placeholder="Username"/>
      <select name="sport" id="sport" size={3} required>
        <option value="">- Please Select a Sport -</option>
        <option value="Tennis">Tennis</option>
        <option value="Squash">Squash</option>
        <option value="Badminton">Badminton</option>
      </select>
      <legend>Please select your preferred skill level</legend>
      <div className="form__radio">
      <Input type="radio" name="skill_level" id="1" value="novice" label="Novice"/>
      <Input type="radio" name="skill_level" id="2" value="beginner" label="Beginner"/>
      <Input type="radio" name="skill_level" id="3" value="intermediate" label="Intermediate"/>
      <Input type="radio" name="skill_level" id="4" value="advanced" label="Advanced"/>
      <Input type="radio" name="skill_level" id="5" value="expert" label="Expert"/>
      </div>
      <Input type="password" name="password" label="Password" placeholder="Password"/>
      <button className="form__btn">Sign Up</button>
      <p>{error}</p>
    </form>
      <p className="sign__switch">
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
};

export default SignUpPage;
