"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Box display="flex" justifyContent="space-between" minHeight={650}>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 5 }}>
        <Skeleton variant="rectangular" width={250} height={100} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 5 }}>
        <Skeleton variant="rectangular" width={250} height={100} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", px: 5 }}>
        <Skeleton variant="rectangular" width={250} height={100} />
      </Box>
    </Box>
  );
}
