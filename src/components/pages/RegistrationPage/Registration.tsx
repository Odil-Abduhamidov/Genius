import "./RegistrationPage.css";

export const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <div className="registration-box">
        <h1 className="registration-title">Регистрация</h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            className="registration-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="registration-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="registration-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="registration-input"
          />
          <button className="registration-button">Регистрация</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
