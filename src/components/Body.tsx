import Grid from "@mui/material/Grid";
import ContactForm from "./ContactForm";
import Solutions from "./Solutions";
import BodyContent from "./Carousel";

function Body() {
  return (
    <Grid
      container
      sx={{
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <Grid item xs={12} height="100%">
        <BodyContent />
      </Grid>
      <Grid item xs={12} id="solutions">
        <Solutions />
      </Grid>
      <Grid item xs={12} id="contact-form">
        <ContactForm />
      </Grid>
    </Grid>
  );
}

export default Body;
