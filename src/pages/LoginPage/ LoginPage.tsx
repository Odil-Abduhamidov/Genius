import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();


    const userData = localStorage.getItem(email);
    if (!userData) {
      alert(
        "Пользователь с таким email не найден. Пожалуйста, зарегистрируйтесь."
      );
      return;
    }


    const { password: storedPassword } = JSON.parse(userData);

    if (storedPassword === password) {
      // Сохраняем статус входа в localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", email); 


      navigate("/main");
    } else {
      alert("Неверный пароль.");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
