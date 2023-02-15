import Header from "./Header";
import { ThemeContext } from "../..";
import { Button } from "@mui/material";

function Reservas() {
  return (
    <section id="Reservation">
      <header className="App-header">
        <Header />
      </header>
      <section id="Contact">
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => (
            <Button onClick={changeTheme}>{theme}</Button>
          )}
        </ThemeContext.Consumer>
      </section>
      <p>Hola</p>
    </section>
  );
}
export default Reservas;
