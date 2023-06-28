"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      minHeight={650}
      p={7}
    >
      <Box sx={{ display: "flex", justifyContent: "center", px: 0.2 }}>
        <Skeleton variant="rectangular" width={300} height={350} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", px: 0.2 }}>
        <Skeleton variant="rectangular" width={300} height={350} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", px: 0.2 }}>
        <Skeleton variant="rectangular" width={300} height={350} />
      </Box>
    </Box>
  );
}
