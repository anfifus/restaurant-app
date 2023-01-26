import { Grid, Typography } from "@mui/material";
import "./Restaurant.css";
import h1 from "../../components/Images/h-1.png";
import h2 from "../../components/Images/h-2.png";
import h3 from "../../components/Images/h-3.png";
import { Container } from "@mui/system";

function Restaurant() {
  const parraf1 =
    "Crée par Jean Minchelli à la fin des années 60, homme de la mer et ami du Tout Paris en vogue,&nbsp;Le Duc fait partie de la Nouvelle Vague culinaire qui va déferler sur l’Hexagone: rompant avec les&nbsp;dogmes de la cuisine traditionnelle et bourgeoise, le restaurant ose la simplicité du naturel,&nbsp;réduisant quantité de sauces et temps de cuisson pour gagner en saveur et légèreté. C’est ici&nbsp;qu’apparurent les premiers poissons servis crus, du jamais vu alors! Cette cuisine très actuelle&nbsp;assure au «&nbsp;Duc&nbsp;» longévité et modernité. Signé Slavik, le décor d’origine teinté d’embruns ancre&nbsp;le lieu dans un chic intemporel.";
  const parraf2 =
    "Depuis sa création, qualité et fraicheur sont les maitres mots de cet établissement de haute lignée. Poissons, coquillages et crustacés sont issus des cotes françaises, sortis de l’eau par de petits pêcheurs. La carte suit les marées et les saisons, pour ne livrer que le meilleur des arrivages : homard breton, huitres de Belon ou bar de ligne sont mis en valeur par la simplicité des préparations et la justesse des cuissons. Quant aux épices et aux herbes aromatiques, elles savent révéler la vraie nature de ces produits uniques, qu’ils soient luxueux comme le turbot ou populaires comme la sardine.";
  const parraf3 =
    "Les équipes se succèdent chez Le Duc mais l'esprit Minchelli est toujours là. Dominique Minchelli secondé par Pascal Hélard et Senthuran Vignesvaran  en cuisine fait en sorte que esprit de famille et modernité aillent de pair . L'équipe de salle est présente au rendez vous et s'occupe de tous les clients avec la même attention , que ce soit de vieux habitués ou des futurs .";
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            justifyContent={"center"}
            alignItems="center"
            fontSize={25}
            display={"grid"}
          >
            Le Restaurant
          </Typography>
        </Grid>
        <Grid container id="containerRestaurant">
          <Grid item xs={4} className="itemsRestaurant">
            <img src={h1} alt="h1" className="img" />
            <Typography variant="h6" fontSize={"40px"}>
              Notre histoire
            </Typography>
            <Typography fontSize={"14px"} display="grid">
              {parraf1}
            </Typography>
          </Grid>
          <Grid item xs={4} className="itemsRestaurant">
            <img src={h2} alt="h2" className="img" />
            <Typography variant="h6" fontSize={"40px"}>
              Nos produits
            </Typography>
            <Typography fontSize={"14px"} display="grid">
              {parraf2}
            </Typography>
          </Grid>

          <Grid item xs={4} className="itemsRestaurant">
            <div>
              <img src={h3} alt="h3" className="img" />
            </div>
            {/* centrar la imatge dins del div perque les imatges són més petites que la del mig i per tant necessitem el div per centrar-la i quedi del mateix tamany*/}

            <Typography variant="h6" fontSize={"40px"}>
              Notre équipe
            </Typography>
            <Typography
              fontSize={"14px"}
              justifyContent="center"
              alignItems={"center"}
              display="grid"
            >
              {parraf3}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Restaurant;
