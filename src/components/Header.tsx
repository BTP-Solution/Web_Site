import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import logo from "../assets/logo2.png";
import { scrollToSection } from "../utils/scrollToSection";

function Header() {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        backgroundColor: "#F9FAFC",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        py: 1,
        px: 2,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo Section */}
        <Grid item xs={8} sm={4}>
          <Box
            component="img"
            src={logo}
            alt="BTP Solution Logo"
            sx={{
              width: { xs: 120, sm: 180 },
              objectFit: "contain",
            }}
          />
        </Grid>

        {/* Navigation Buttons */}
        <Grid
          item
          xs={4}
          sm={8}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "#1976D2",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E3F2FD",
              },
            }}
            onClick={() => scrollToSection("solutions")}
          >
            Solutions
          </Button>
          <Button
            variant="contained"
            onClick={() => scrollToSection("contact-form")}
            sx={{
              backgroundColor: "#1976D2",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1565C0",
              },
            }}
          >
            Contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
