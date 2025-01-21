import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/ LoginPage.tsx";
import { MainPage } from "./pages/MainPage/MainPage.tsx";
import { FavPages } from "./pages/FavoritesPage/FavPages.tsx";
import { CardPage } from "./pages/CardPage/CardPage.tsx";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/fav" element={<FavPages />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
