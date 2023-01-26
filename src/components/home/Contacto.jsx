import { Container } from "@mui/material";
import "./Contacto.css";

function Contact() {
  const styles = {
    width: "600px",
    height: "500px",
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
    border: 0,
  };
  return (
    <Container id="Contact" maxwidth="lg">
      <h2>Information of Contact</h2>
      <p>Adress: Street with Noname</p>
      <p>Phone: 930000000</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23893.272840073318!2d2.441785216282112!3d41.53332431150274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b4e4409e0875%3A0xc9fbf03a1384100b!2sFundaci%C3%B3%20TecnoCampus%20Matar%C3%B3-Maresme!5e0!3m2!1sca!2ses!4v1674758260929!5m2!1sca!2ses"
        title="MyFrame"
        style={styles}
      ></iframe>
    </Container>
  );
}
export default Contact;
