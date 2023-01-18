import "./Home.css";
import Header from "../../components/home/Header";
import Carousel from "react-material-ui-carousel";
import ItemCarousel from "../../components/home/ItemCarousel";

const items = [
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/2.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/3.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/4.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/5.jpg" },
  { src: "http://restaurantleduc.com/wp-content/uploads/2015/03/6.jpg" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />
        </div>
      </header>
      <section id="home-">
        <Carousel
          indicatorIconButtonProps={{
            style: {
              bottom: "100px",
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
    </div>
  );
}

export default App;
