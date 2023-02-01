import "./Home.css";
import Header from "../../components/home/Header";
import Carousel from "react-material-ui-carousel";
import ItemCarousel from "../../components/home/ItemCarousel";
import IntroRestaurant from "../../components/home/IntroRestaurante";
import Contact from "../../components/home/Contacto";
import FoodMenu from "../../components/home/Menu.Comida";
import Fish from "../../components/core/Fish";
import { Box } from "@mui/material";
import Restaurant from "../../components/home/Restaurant";
import r1 from "../../components/Images/r-1.jpg";
import r2 from "../../components/Images/r-2.jpg";
import r3 from "../../components/Images/r-3.jpg";
import r4 from "../../components/Images/r-4.jpg";
const items = [
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/2.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/3.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/4.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/5.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/6.jpg" },
];
const itemsCarousel2 = [
  {src: r1},
  {src: r2},
  {src: r3},
  {src: r4},
]
const res = 743 - 621;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />
        </div>
      </header>

      <section id="Carousel">
        <Carousel
          indicatorIconButtonProps={{
            style: {
              bottom: { res },
              zIndex: "1",
            },
          }}
        >
          {items.map((item, index) => (
            <ItemCarousel
              key={"2015/03/" + index}
              item={item}
              className="images"
            />
          ))}
        </Carousel>
      </section>
      <section id="introRestaurant">
        <IntroRestaurant />
      </section>
      <section id="FoodMenu">
        <Box maxWidth="100%">
          <Fish />
          <FoodMenu />
        </Box>
      </section>
      <section id="restaurant">
        <Restaurant />
      </section>
      <section>
      <Carousel
          indicatorIconButtonProps={{
            style: {
              bottom: { res },
              zIndex: "1",
            },
          }}
        >
          {itemsCarousel2.map((item, index) => (
            <ItemCarousel
              key={"r-" + index}
              item={item}
              className="images"
            />
          ))}
        </Carousel>
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
