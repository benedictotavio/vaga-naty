"use client";

import { useGlobalContext } from "@/app/context/store";
import { Client } from "@/app/hooks/useClient";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

type PropClients = {
  id: number;
};

const UserSection = ({ id }: PropClients) => {
  const [user, setUser] = useState<Client>({
    numeroDocumento: "",
    tipoDocumento: "",
    nome: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const { getClientById } = useGlobalContext();

  useEffect(() => {
    getClientById(id).then((res) => setUser(res));
  }, [getClientById, id]);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar
                alt="Remy Sharp"
                src="@/public/icon.png"
                sx={{ margin: "0 auto" }}
              >
                C
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {user.nome}
              </Typography>
              <Typography variant="h5" component="div">
                {user.tipoDocumento}: {user.numeroDocumento}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {user.logradouro} - {user.bairro}
              </Typography>
              <Typography variant="body2">
                {user.cidade}/{user.uf}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserSection;
