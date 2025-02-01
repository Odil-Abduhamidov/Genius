import "./Header.css"; 

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    window.location.href = "/login"; 
  };

  return (
    <header className="header">
      <h1 className="header-title">Genius App</h1>
      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </header>
  );
};

export default Header;
