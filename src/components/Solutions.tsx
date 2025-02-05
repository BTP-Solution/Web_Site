import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue"; // CAP
import ApiIcon from "@mui/icons-material/Api"; // RAP
import CodeIcon from "@mui/icons-material/Code"; // ABAP
import DesignServicesIcon from "@mui/icons-material/DesignServices"; // Fiori
import CloudDoneIcon from "@mui/icons-material/CloudDone"; // Public Cloud
import LockIcon from "@mui/icons-material/Lock"; // Private Cloud

const sapModules = [
  {
    icon: <CloudQueueIcon sx={{ fontSize: 60, color: "#5E35B1" }} />,
    title: "CAP",
    description:
      "Leverage the Cloud Application Programming Model for building cloud-native services on SAP BTP.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 60, color: "#5E35B1" }} />,
    title: "RAP",
    description:
      "Utilize the RESTful ABAP Programming Model for modern, scalable application development.",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 60, color: "#5E35B1" }} />,
    title: "ABAP",
    description:
      "Build robust business solutions leveraging the core ABAP environment on SAP BTP.",
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 60, color: "#5E35B1" }} />,
    title: "Fiori",
    description:
      "Deliver consumer-grade user experiences with SAP Fiori for web and mobile apps.",
  },
  {
    icon: <CloudDoneIcon sx={{ fontSize: 60, color: "#5E35B1" }} />,
    title: "Public Cloud",
    description:
      "Adopt scalable, multi-tenant cloud solutions for agility and cost efficiency.",
  },
  {
    icon: <LockIcon sx={{ fontSize: 60, color: "#5E35B1" }} />,
    title: "Private Cloud",
    description:
      "Maintain control and security with a dedicated, private SAP cloud environment.",
  },
];

const Solutions = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: { xl: 30, lg: 5, md: 2, sm: 2, xs: 1 },
        backgroundColor: "#F9FAFC",
      }}
    >
      {/* Section Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold" color="#3463ac" gutterBottom>
          SAP Solutions and Modules
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ maxWidth: "700px", mx: "auto" }}
        >
          BTP Solution offers the most suitable SAP technologies to accelerate
          and streamline your business processes—whether on public or private
          cloud.
        </Typography>
      </Box>

      {/* Module Cards */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {sapModules.map((module, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex">
            <Card
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "white",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 4 }}>
                <Box sx={{ mb: 2 }}>{module.icon}</Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#424242", mb: 1 }}
                >
                  {module.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ minHeight: "60px" }}
                >
                  {module.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
