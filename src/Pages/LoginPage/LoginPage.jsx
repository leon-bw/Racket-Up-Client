import Input from "../../Components/Input/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.scss";
import Button from "../../Components/Button/Button";

const LoginPage = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email: e.target.email.value,
          password: e.target.password.value,
        }
      );

      sessionStorage.setItem("AuthToken", response.data.token);

      navigate("/profile");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <main>
      <section className="login">
        <div className="login__container">
          <div className="login__header">
            <h1 className="login__heading">Sign In</h1>
            <p className="login__text">
              New user?
              <Link to="/signup" class="login__switch-page">
                Create an account
              </Link>
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <Input
              className="form__field"
              type="text"
              name="username"
              label="Username"
              placeholder="Username"
            />
            <Input
              className="form__field"
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
            />
            <div className="login__control">
              <a className="login__forgot-password">Forgot Password ?</a>
            </div>
            <Button>Login</Button>
            {error && <div className="login__message">{error}</div>}
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
