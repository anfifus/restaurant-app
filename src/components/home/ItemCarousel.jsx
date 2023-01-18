import "./ItemCarousel.css";
function ItemCarousel(prop) {
  return (
    <img
      src={prop.item.src}
      alt={"/2015/03/" + prop.item.index}
      className="image"
    />
  );
}
export default ItemCarousel;
