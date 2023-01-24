import { Card, CardContent, Container } from "@mui/material";
import "./MenuComida.css";
function FoodMenu() {
  return (
    <Container id="containerComida" maxWidth="lg">
      <Card>
        <CardContent>
          <h1>FoodMenu</h1>
          <p className="FoodMenu">
            Menu de la mer SERVI SEULEMENT AU DÉJEÛNER <br /> - 55 € - <br />{" "}
            Thon germon en tartare , concombre et coriandre
            <img
              id="smallFish"
              src="http://restaurantleduc.com/wp-content/themes/leduc/img/fish/10.png"
              alt="smallFish"
              className="dispositionFish"
            />
            <br /> ou Sardine en beignet , tomate et menthe
            <br /> Lotte tiède aux herbes d’été ou palourdes à l’ail
            <img
              id="fish"
              src="http://restaurantleduc.com/wp-content/themes/leduc/img/fish/20.png"
              alt="fish"
              className="dispositionFish"
            />
            <br /> Gâteau au chocolat ou salade d’agrumes.
          </p>

          <hr></hr>
        </CardContent>
      </Card>
    </Container>
  );
}
export default FoodMenu;
