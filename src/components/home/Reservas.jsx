import Header from "./Header";
import { ThemeContext } from "../..";
import { Button } from "@mui/material";
import "./Reservas.css";

function Reservas() {
  return (
    <section id="Reservation">
      <div className="containerHeader">
        <header className="App-header">
          <Header />
        </header>
      </div>

      <section id="Contact">
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => (
            <Button onClick={changeTheme}>{theme}</Button>
          )}
        </ThemeContext.Consumer>
      </section>
    </section>
  );
}
export default Reservas;
