import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo2.png";
import { useState, useEffect } from "react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mouseNearTop, setMouseNearTop] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveringSolutions, setHoveringSolutions] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (id?: string) => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });

        setTimeout(() => {
          if (!mouseNearTop) setVisible(false);
        }, 800);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < lastScrollY);

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !mouseNearTop) {
        setVisible(false);
      } else if (scrollingUp || mouseNearTop) {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setMouseNearTop(true);
        setVisible(true);
      } else {
        setMouseNearTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseNearTop, scrollingUp]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="BTP Solution Logo"
          sx={{ width: { xs: 120, md: 150 }, cursor: "pointer", display: "block" }}
          onClick={() => handleNavigate()}
        />

        {/* Mobile Menu Button */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#3463ac" }}
          onClick={handleToggleMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleToggleMenu}>
          <List sx={{ width: 250 }}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigate("solutions")}>
                <ListItemText primary="Solutions" sx={{ color: "#3463ac" }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNavigate("contact-form")}>
                <ListItemText primary="Contact" sx={{ color: "#3463ac" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {/* Solutions Butonu - Özel Efekt */}
          <Button
            sx={{
              color: hoveringSolutions ? "#3463ac" : "#3463ac",
              fontWeight: "bold",
              textTransform: "none",
              position: "relative",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#3463ac",
              },
              "&::after": {
                content: '""',
                position: "absolute", 
                bottom: "-5px",
                width: hoveringSolutions ? "80%" : "0%",
                height: "3px",
                backgroundColor: "#3463ac",
                transition: "width 0.3s ease-in-out, left 0.3s ease-in-out",
                left: hoveringSolutions ? "10%" : "50%",
              },
            }}
            onMouseEnter={() => setHoveringSolutions(true)}
            onMouseLeave={() => setHoveringSolutions(false)}
            onClick={() => handleNavigate("solutions")}
          >
            Solutions
          </Button>

          {/* Contact Butonu */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3463ac",
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#3463ac",
              },
            }}
            onClick={() => handleNavigate("contact-form")}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
