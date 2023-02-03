import { useEffect, useState } from "react";
import "./ItemCarousel.css";
function ItemCarousel(prop) {
  const [chooseCarousel, setCarousel] = useState("");

  useEffect(() => {
    setCarousel(
      String(prop.item.src).includes("r-") ? "CarouselImage2" : "CarouselImage"
    );
  }, [prop.item.src]);

  return (
    <img src={prop.item.src} alt={prop.item.key} className={chooseCarousel} />
  );
}
export default ItemCarousel;
