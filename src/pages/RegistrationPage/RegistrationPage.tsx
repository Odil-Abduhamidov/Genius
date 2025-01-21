import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

export const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      alert("Этот email уже зарегистрирован.");
      return;
    }

    localStorage.setItem(email, JSON.stringify({ email, password }));
    alert("Регистрация успешна!");
    navigate("/login");
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2 className="registration-title">Регистрация</h2>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Электронная почта"
            type="email"
            className="registration-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            className="registration-input"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input
            className="registration-input"
            type="password"
            value={confirmPassword}
            placeholder="Подтверждение пароля"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p className="NoHaveAcc">
          Есть аккаунт    <Link to="/login">Войдите</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
