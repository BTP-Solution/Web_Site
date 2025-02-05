import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { scrollToSection } from "../utils/scrollToSection";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

const carouselItems = [
  {
    image: carousel1,
    title: "Transform Your Business with SAP Solutions",
    description:
      "Empower your enterprise with cutting-edge SAP integration, streamlining operations and maximizing efficiency.",
  },
  {
    image: carousel2,
    title: "Expert SAP Consultancy Tailored for Success",
    description:
      "Partner with our seasoned consultants to customize SAP solutions that fit your unique business needs.",
  },
  {
    image: carousel3,
    title: "Optimize Performance with Seamless Processes",
    description:
      "Leverage our SAP expertise to ensure smooth workflows and drive long-term growth across your organization.",
  },
];

const BodyContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const currentItem = carouselItems[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 300, sm: 450, md: 700 },
        overflow: "hidden",
      }}
    >
      {/* Image Background */}
      <Box
        component="img"
        src={currentItem.image}
        alt={currentItem.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          imageRendering: "auto",
          filter: "brightness(70%)",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Text Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 3,
          backdropFilter: "blur(3px)",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          {currentItem.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            mb: 3,
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          {currentItem.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3463ac",
            color: "white",
            "&:hover": {
              backgroundColor: "#e06600",
            },
            fontWeight: "bold",
          }}
          onClick={() => scrollToSection("contact-form")}
        >
          Learn More
        </Button>
      </Box>

      {/* Dots Navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {carouselItems.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#3463ac" : "#ccc",
              transition: "background-color 0.3s",
              cursor: "pointer",
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BodyContent;
