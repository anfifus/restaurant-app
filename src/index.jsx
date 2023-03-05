import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createContext, useState } from "react";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reservas from "./components/home/Reservas";
import Header from "./components/home/Header";
import FoodMenu from "./components/home/MenuComida";
import Restaurant from "./components/home/Restaurant";
import Contact from "./components/home/Contacto";
import News from "./components/home/Noticias";
 
const DEFAULT_THEME = "light";

const getDesignPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === DEFAULT_THEME
      ? {
          primary: {
            main: "#0a95ff",
          },
          secondary: {
            main: "#ffffff",
          },
        }
      : {
          primary: {
            main: "#BB86FC",
          },
          secondary: {
            main: "#3700B3",
          },
        }),
  },
});
/* const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fcfcfc",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
}); */
export const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  changeTheme: () => {},
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Reservation",
    element: <Reservas />,
  },
  /* {
    path: "/components/home/The letter",
    element: <FoodMenu />,
  },
  {
    path: "/components/home/The restaurant",
    element: <Restaurant />,
  },
  {
    path: "/components/home/The contact",
    element: <Contact />,
  },
  {
    path: "/components/home/The news",
    element: <News />,
  }, */
]);

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const changeTheme = () =>
    setTheme(theme === DEFAULT_THEME ? "dark" : DEFAULT_THEME);
  return (
    <>
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme,
        }}
      >
        <ThemeProvider theme={createTheme(getDesignPalette(theme))}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
