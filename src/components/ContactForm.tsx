import { Grid, TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
  const handleSubmit = (e: any) => {
    const { email, firstName, lastName, message } = e.target.elements;

    if (!email.value.includes("@")) {
      e.preventDefault();
      alert("Please enter a valid email address.");
      return;
    }

    if (
      !firstName.value.trim() ||
      !lastName.value.trim() ||
      !message.value.trim()
    ) {
      e.preventDefault();
      alert("Please fill out all mandatory fields.");
      return;
    }
  };

  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "#F9FAFC" }}>
      {/* Section Heading */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", color: "#1976D2" }}
          gutterBottom
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          maxWidth="600px"
          mx="auto"
        >
          Have questions or need assistance? Fill out the form below, and our
          team will reach out to you as soon as possible.
        </Typography>
      </Box>

      {/* Form Container */}
      <Box
        component="form"
        action="https://formspree.io/f/mzzdgjqz"
        method="POST"
        onSubmit={handleSubmit}
        sx={{
          p: { xs: 2, sm: 4 },
          backgroundColor: "white",
          border: "1px solid #e0e0e0",
          borderRadius: 3,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              fullWidth
              label="First Name"
              variant="outlined"
              required
              sx={{ backgroundColor: "white" }}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              fullWidth
              label="Last Name"
              variant="outlined"
              required
              sx={{ backgroundColor: "white" }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              required
              sx={{ backgroundColor: "white" }}
            />
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              fullWidth
              label="Phone Number"
              type="tel"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>

          {/* Message */}
          <Grid item xs={12}>
            <TextField
              name="message"
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              required
              sx={{ backgroundColor: "white" }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                padding: "12px 32px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "8px",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#1565C0",
                },
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;
