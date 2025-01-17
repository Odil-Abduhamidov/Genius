import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "../src/components/pages/LoginPage/ LoginPage.tsx";
import { MainPage } from "../src/components/pages/MainPage/MainPage.tsx";
import { FavPages } from "../src/components/pages/FavoritesPage/FavPages.tsx";
import { CardPage } from "../src/components/pages/CardPage/CardPage.tsx";
import { RegistrationPage } from "./components/pages/RegistrationPage/Registration.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/fav" element={<FavPages />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
