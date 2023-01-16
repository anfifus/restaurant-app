import { Facebook, Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import NavBar from "../core/NavBar";
import "./Header.css";
function Header() {
  return (
    <div id="designHeader">
      {/*       <img src={nameSrc} alt="Restaurant Le Duc" />
       */}{" "}
      {/* <nav>
        <Button variant="text" href="#letter">
          The letter
        </Button>
        <Button variant="text" href="#restaurant">
          The restaurant
        </Button>
        <Button variant="text" href="#contact">
          The contact
        </Button>
        <Button variant="text" href="#news">
          The news
        </Button>
      </nav> */}
      <NavBar />
      {/*   <Button
        variant="text"
        startIcon={<Facebook />}
        href="https://www.facebook.com/pages/Le-Duc-243-Blvd-Raspail-Paris/261475457347358"
      ></Button>
      <Button variant="text" startIcon={<Google />}></Button> */}
    </div>
  );
}
export default Header;
