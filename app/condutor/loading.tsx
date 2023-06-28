"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box minHeight={650}>
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <Skeleton variant="rounded" width={350} height={75} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <Skeleton variant="rounded" width={350} height={75} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <Skeleton variant="rounded" width={350} height={75} />
      </Box>
    </Box>
  );
}
