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
        minHeight: 650,
        p: 10,
      }}
    >
      <Skeleton variant="rectangular" width={450} height={600} />
    </Box>
  );
}
