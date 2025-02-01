import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { store } from "./store/store";
import { LoginPage } from "./pages/LoginPage/ LoginPage";
import MainPage from "./pages/MainPage/MainPage";

const routerConfig = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/main", element: <MainPage /> },
  { path: "/reg", element: <RegistrationPage /> },
  { path: "/login", element: <LoginPage/> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={routerConfig} />
  </Provider>
);
