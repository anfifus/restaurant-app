import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createContext, useState } from "react";
const DEFAUT_THEME = "light";

const getDesignPalette = (mode) => ({
  mode,
  ...(mode === DEFAUT_THEME
    ? {
        primary: {
          main: "#fcfcfc",
        },
        secondary: {
          main: "#FFFFFF",
        },
      }
    : {
        primary: {
          main: "#212121",
        },
        secondary: {
          main: "#212124",
        },
      }),
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
  theme: DEFAUT_THEME,
  changeTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(DEFAUT_THEME);

  const changeTheme = () =>{
    setTheme(theme === DEFAUT_THEME ? "dark" : DEFAUT_THEME);
  }
  return (
    <>
      <ThemeContext.Provider
        value={{
          theme: theme,
          setTheme: changeTheme,
        }}
      >
        <ThemeProvider theme={createTheme(getDesignPalette(theme))}>
          <Home />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
