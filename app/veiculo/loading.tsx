"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        minHeight: 650,
        pt: 5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", px: 0.1 }}>
        <Skeleton variant="rectangular" width={250} height={150} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", px: 0.1 }}>
        <Skeleton variant="rectangular" width={250} height={150} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", px: 0.1 }}>
        <Skeleton variant="rectangular" width={250} height={150} />
      </Box>
    </Box>
  );
}
