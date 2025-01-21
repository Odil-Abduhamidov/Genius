import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <h2>Главная страница</h2>
      <p>Добро пожаловать на главную страницу!</p>
    </>
  );
};
