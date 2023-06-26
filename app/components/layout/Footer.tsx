"use client";

import { Box, Container, Paper, Typography } from "@mui/material";

import AltRouteIcon from "@mui/icons-material/AltRoute";
import { Allerta_Stencil } from "next/font/google";

const allerta = Allerta_Stencil({
  subsets: ["latin"],
  weight: "400",
});

export default function GuestFooter() {
  return (
    <Paper
      sx={{
        bottom: 0,
        backgroundColor: "#111521",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <AltRouteIcon sx={{ color: "#b469ff", fontSize: "2.3em" }} />
          <Typography
            className={allerta.className}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#b469ff",
              textDecoration: "none",
              fontSize: "1.5em",
              justifyContent: "center",
            }}
          >
            MOVEMAGIC
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography
            variant="caption"
            color="initial"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#fff",
              textDecoration: "none",
              fontSize: ".65em",
            }}
          >
            Copyright ©{new Date().getFullYear()}. [] Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
