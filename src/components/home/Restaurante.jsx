import { Container, Grid } from "@mui/material";
import "./Restaurante.css";

function Restaurant() {
  return (
    <Container id="Restaurant" maxWidth="lg">
      {/* <div id="titleRestaurant" className="formatContent">
        <h1>Restaurant Le Duc</h1>
      </div>
      <hr className="formatLine"></hr>
      <hr className="formatLine"></hr>
      <div className="formatContent">
        <p>
          Finies les vacances ,nous sommes de retour !!!!!!! Le restaurant est
          ouvert du lundi au samedi pour déjeuner et diner.; En temps normal
          ,Nous prenons les réservations au 01 43 22 59 59 et au 01 43 20 96 30
          .Le week end et pendant la pause , 06 23 79 32 36 ou
          dominique.minchelli@restaurantleduc.com. Vous pouvez aussi visiter
          notre instagram https://www.instagram.com/leducparis/?hl=fr
        </p>
      </div>
      <hr className="formatLine"></hr>
      <hr className="formatLine"></hr>
      <div className="formatContent">
        <p>
          Restaurant de poissons et fruits de mer depuis 1967, Le Duc est un
          rendez vous gastronomique immanquable pour tout amateur de bonne
          pêche. Un lieu de caractère installé à deux pas des ateliers de César
          et Dali, dont la carte se dessine suivant les arrivages journaliers.
        </p>
      </div> */}
<Grid container spacing={1}>
      <Grid item xs={12} lg={2} id="titleRestaurant" className="formatContent">
        <h1>Restaurant Le Duc</h1>
        
      </Grid>
      <Grid item xs={12} lg={4} id="titleRestaurant" className="formatContent">
      <hr className="formatLine"></hr>
      <hr className="formatLine"></hr>
      </Grid>
      <Grid item xs={12} lg={2} className="formatContent">
      
        <p>
          Finies les vacances ,nous sommes de retour !!!!!!! Le restaurant est
          ouvert du lundi au samedi pour déjeuner et diner.; En temps normal
          ,Nous prenons les réservations au 01 43 22 59 59 et au 01 43 20 96 30
          .Le week end et pendant la pause , 06 23 79 32 36 ou
          dominique.minchelli@restaurantleduc.com. Vous pouvez aussi visiter
          notre instagram https://www.instagram.com/leducparis/?hl=fr
        </p>
        
      </Grid>
      <Grid item xs={12} lg={3} id="titleRestaurant" className="formatContent">
      <hr className="formatLine"></hr>
      <hr className="formatLine"></hr>
      </Grid>
      <Grid item xs={12} lg={2} className="formatContent">
      
        <p>
          Restaurant de poissons et fruits de mer depuis 1967, Le Duc est un
          rendez vous gastronomique immanquable pour tout amateur de bonne
          pêche. Un lieu de caractère installé à deux pas des ateliers de César
          et Dali, dont la carte se dessine suivant les arrivages journaliers.
        </p>
      </Grid>
      </Grid>  
    </Container>
  );
}
export default Restaurant;
