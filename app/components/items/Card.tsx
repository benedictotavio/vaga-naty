"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Client } from "@/app/api/client/ClientList";

export default function ViewCard({
  nome,
  cidade,
  logradouro,
  bairro,
  numero,
  numeroDocumento,
  tipoDocumento,
  uf,
}: Client) {
  return (
    <Box sx={{ maxWidth: 350, minWidth: 250, margin: 3 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {nome}
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              {tipoDocumento}:{numeroDocumento}
            </Typography>
            <Typography variant="h5" component="div">
              {logradouro}, {numero}
            </Typography>
            <Typography variant="body2">
              <br />
              {bairro} - {cidade}/{uf}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Trash</Button>
            <Button size="small">Update</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
