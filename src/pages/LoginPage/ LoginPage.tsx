import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "odil@gmail.com" && password === "12345678") {
      localStorage.setItem("isLoggedIn", "true");

      navigate("/main");
    } else {
      alert("Неверные данные");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Aвторизация</h1>
        <form onSubmit={handleLogin}>
          <input
            placeholder="Email"
            className="login-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Пароль"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Войти</button>
        </form>
        <p className="NoHaveAcc">
          Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
        </p>
      </div>
    </div>
  );
};
