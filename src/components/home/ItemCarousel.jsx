import { useEffect, useState } from "react";
import "./ItemCarousel.css";
function ItemCarousel(prop) {
  console.log("src-->",prop.item.src);
  const [chooseCarousel,setCarousel] = useState("");

   useEffect(()=>{
    setCarousel(String(prop.item.src).includes("r-") ? "CarouselImage2" : "CarouselImage");
    //window.addEventListener("load",handleLoad);
    return () => {
      // Component did unmoun
      console.log("Eliminando listener en B");
      setCarousel(String(prop.item.src).includes("r-") ? "CarouselImage2" : "CarouselImage");
      //window.removeEventListener("load", handleLoad);
    };
  },[chooseCarousel]);  

  return (
    <img
      
      src={prop.item.src}
      alt={ prop.item.key}
      className={chooseCarousel}
    />
  );
}
export default ItemCarousel;
