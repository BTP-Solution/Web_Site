import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { scrollToSection } from "../utils/scrollToSection";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976D2",
        color: "white",
        py: 4,
        px: 2,
        mt: 6,
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* Company Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            BTP Solution
          </Typography>
          <Typography variant="body2">
            Delivering innovative SAP solutions to streamline your business
            processes and drive growth.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Link
              component="button"
              onClick={() => scrollToSection("solutions")}
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1, textAlign: "left" }}
            >
              Solutions
            </Link>
            <Link
              component="button"
              onClick={() => scrollToSection("contact-form")}
              color="inherit"
              underline="hover"
              sx={{ display: "block", mb: 1, textAlign: "left" }}
            >
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            gap={1}
          >
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/btpsolution/"
              sx={{ color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/btp.solution/"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        textAlign="center"
        mt={4}
        pt={2}
        borderTop="1px solid rgba(255,255,255,0.2)"
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} BTP Solution. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
