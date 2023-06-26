"use client";

import { Box } from "@mui/material";
import Banner from "./components/Banner";
import MediaCard from "./components/items/MediaCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        minHeight={335}
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex", sm: "block" },
        }}
      >
        <MediaCard title="Cliente" text="Area do Cliente" />
        <MediaCard title="Deslocamento" text="Ver Deslocamentos" />
      </Box>
    </div>
  );
}
