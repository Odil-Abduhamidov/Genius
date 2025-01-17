import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage: React.FC = () => {
  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Вход</h1>
        <form>
          <input type="email" placeholder="Email" className="login-input" />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button className="login-button">Вход</button>
        </form>
        <p className="NoHaveAcc">
          Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
