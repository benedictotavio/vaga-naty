"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", minHeight: 650 }}>
      <Box m={5}>
        <Skeleton animation="pulse" />
        <Skeleton variant="rectangular" width={900} height={200} />
      </Box>
    </Box>
  );
}
