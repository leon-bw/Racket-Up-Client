import Input from "../../Components/Input/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.scss";
import Button from "../../Components/Button/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [enteredFormData, SetEnteredFormData] = useState({
    username: "",
    password: "",
  });

  const [login, setLogin] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState("");
  
  const handleInputChange = (e) => {
    SetEnteredFormData({
      ...enteredFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(enteredFormData)

    setFormErrors({});
    let formIsValid = true;
    const errors = {};

    if (!e.target.username.value) {
      formIsValid = false;
      errors["username"] = "You must enter a valid username";
    }

    if (!e.target.password.value) {
      formIsValid = false;
      errors["password"] = "You must enter a password";
    }

    if (!formIsValid) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          username: e.target.username.value,
          password: e.target.password.value,
        }
      );

      sessionStorage.setItem("AuthToken", response.data.authToken);

      setLogin(true);
      navigate("/loading");
      setTimeout(() => {
        navigate(`/profile`);
      }, 2000);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error.message);
    }
  };
  
  return (
    <main>
      <section className="login">
        <div className="login__container">
          <div className="login__header">
            <h1 className="login__heading">Sign In</h1>
            <p className="login__text">
              New user ?
              <Link to="/signup" className="login__switch-page">
                {" "}
                Create an account
              </Link>
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            {formErrors.username && (
              <small className="form__error">{formErrors.username}</small>
            )}
            <Input
              className="form__field"
              type="text"
              name="username"
              label="Username"
              placeholder="Username"
              onChange={handleInputChange}
              value={enteredFormData.email}
            />
            {formErrors.password && (
              <small className="form__error">{formErrors.password}</small>
            )}
            <Input
              className="form__field"
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              onChange={handleInputChange}
              value={enteredFormData.password}
            />
            <div className="login__control">
            </div>
            <Button className="login__btn">Login</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;