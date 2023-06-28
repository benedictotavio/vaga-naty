"use client";

import { useGlobalContext } from "@/app/context/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { PropsCondutor } from "./ConductorList";
import { UpdateConductor } from "@/app/hooks/useConductor";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardActions,
  FormControl,
  Grid,
  Modal,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { CloseRounded, Edit } from "@mui/icons-material";

type PropClients = {
  id: number;
};

const UserSection = ({ id }: PropClients) => {
  const [user, setUser] = useState<PropsCondutor>({
    catergoriaHabilitacao: "",
    nome: "",
    numeroHabilitacao: "",
    vencimentoHabilitacao: new Date(),
    id: 0,
  });

  const { getConductorById, editConductor } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [cnh, setCnh] = useState("");
  const [expireCnh, setExpireCnh] = useState("");
  const [cnhCategory, setCnhCategory] = useState("");

  useEffect(() => {
    getConductorById(id).then((res) => {
      setUser(res);
      setName(res.nome);
      setCnh(res.numeroHabilitacao);
      setExpireCnh(res.vencimentoHabilitacao.toString());
      setCnhCategory(res.catergoriaHabilitacao);
    });
  }, [getConductorById, id]);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const handleEdit = async (payload: UpdateConductor) => {
    try {
      if (payload) {
        await editConductor(payload);
        window.alert("Cliente alterado com sucesso!");
      }
    } catch (error) {
      console.error(error);
      window.alert("Não foi possivel editar o cliente!");
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <div>
            <Button onClick={handleClose}>
              <CloseRounded />
            </Button>
            <form
              onSubmit={() =>
                handleEdit({
                  id: id,
                  catergoriaHabilitacao: cnhCategory,
                  nome: name,
                  numeroHabilitacao: cnh,
                  vencimentoHabilitacao: new Date(expireCnh),
                })
              }
            >
              <FormControl>
                <TextField
                  type="text"
                  color="primary"
                  label="Nome"
                  required
                  defaultValue={name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div>
                  <TextField
                    type="text"
                    color="warning"
                    label="Categoria CNH"
                    value={cnhCategory}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCnhCategory(e.target.value)
                    }
                  />
                  <TextField
                    type="text"
                    color="secondary"
                    label="CNH"
                    required
                    defaultValue={cnh}
                    value={cnh}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setCnh(e.target.value)
                    }
                  />
                </div>

                <TextField
                  id="dateInput"
                  label="Selecione a data"
                  type="date"
                  color="warning"
                  defaultValue={expireCnh}
                  value={expireCnh}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setExpireCnh(e.target.value)
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              <div>
                <Button type="submit" variant="contained" color="primary">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Card sx={{ minWidth: 375, minHeight: 600, borderRadius: 10 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Avatar
                  alt="Remy Sharp"
                  src="@/public/icon.png"
                  sx={{ margin: "0 auto", backgroundColor: "yellowgreen" }}
                >
                  C
                </Avatar>
              </Grid>
              <Grid item xs={12} sm={10} md={8}>
                <Box marginY={5}>
                  <b>Nome</b>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {name}
                  </Typography>
                </Box>

                <Box marginY={5}>
                  <b>CNH</b>
                  <Typography variant="h5" component="div">
                    {cnhCategory}: {cnh}
                  </Typography>
                </Box>

                <Box marginTop={5}>
                  <b>Data</b>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {!user.vencimentoHabilitacao
                      ? "Vencimento não informado"
                      : new Date(user.vencimentoHabilitacao).toLocaleDateString(
                          "pt-br",
                          {
                            dateStyle: "medium",
                          }
                        )}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={handleOpen}
            >
              <Edit /> Editar
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default UserSection;
