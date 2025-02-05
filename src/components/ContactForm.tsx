import { Grid, TextField, Button, Box, Typography, CircularProgress, Alert } from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const message = formData.get("message") as string;

    const newErrors: Record<string, string> = {};

    if (!email || !email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mzzdgjqz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        form.reset();

        // 3 saniye sonra mesajı kaldır
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("An error occurred. Try again.");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 6, px: 2, backgroundColor: "#F9FAFC" }}>
      {/* Section Heading */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold", color: "#1976D2" }} gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="textSecondary" maxWidth="600px" mx="auto">
          Have questions or need assistance? Fill out the form below, and our team will reach out to you as soon as possible.
        </Typography>
      </Box>

      {/* Form Container */}
      <Box
        component="form"
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
            <TextField name="firstName" fullWidth label="First Name" variant="outlined" required error={!!errors.firstName} helperText={errors.firstName} />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField name="lastName" fullWidth label="Last Name" variant="outlined" required error={!!errors.lastName} helperText={errors.lastName} />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField name="email" fullWidth label="Email Address" type="email" variant="outlined" required error={!!errors.email} helperText={errors.email} />
          </Grid>

          {/* Phone Number */}
          <Grid item xs={12} sm={6}>
            <TextField name="phone" fullWidth label="Phone Number" type="tel" variant="outlined" />
          </Grid>

          {/* Message */}
          <Grid item xs={12}>
            <TextField name="message" fullWidth label="Your Message" variant="outlined" multiline rows={4} required error={!!errors.message} helperText={errors.message} />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
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
              {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
            </Button>
          </Grid>

          {/* Success Message - Butonun hemen altında */}
          {successMessage && (
            <Grid item xs={12} textAlign="center" mt={1}>
              <Alert severity="success" sx={{ display: "inline-block", fontSize: "0.9rem", py: 1, px: 2 }}>
                {successMessage}
              </Alert>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;
