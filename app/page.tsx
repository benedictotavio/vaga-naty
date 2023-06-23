"use client";

import { Box } from "@mui/material";
import Banner from "./components/Banner";
import MediaCard from "./components/items/MediaCard";

export default function Home() {
  return (
    <>
      <Banner />
      <Box
        marginY="40px"
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        minHeight={'35vh'}
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex", sm: "block" },
        }}
      >
        <MediaCard
          title="Cliente"
          text="Area do Cliente"
        />
        <MediaCard
          title="Cliente"
          text="Area do Cliente"
        />
      </Box>
    </>
  );
}