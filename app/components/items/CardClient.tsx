"use client";

import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useGlobalContext } from "@/app/context/store";
import { Avatar, Modal, TextField } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import styles from "@/app/api/client/Client.module.css";
import Link from "next/link";
import { PropsClient } from "@/app/api/client/ClientList";
import { SignpostOutlined, PublicOutlined } from "@mui/icons-material";

export default function CardClient({
  nome,
  cidade,
  logradouro,
  bairro,
  numero,
  numeroDocumento,
  tipoDocumento,
  uf,
  id,
}: PropsClient) {
  const { deleteClient, editClient } = useGlobalContext();
  const [name, setName] = useState<string>(nome);
  const [city, setCity] = useState<string>(cidade);
  const [neighborhood, setNeighborhood] = useState<string>(bairro);
  const [address, setAddress] = useState<string>(logradouro);
  const [number, setNumber] = useState<string>(numero);
  const [country, setCountry] = useState<string>(uf);
  const [open, setOpen] = useState(false);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const handleDelete = async (user_id: number) => {
    try {
      await deleteClient(user_id);
      window.alert("Cliente deletado com sucesso");
    } catch (error) {
      console.error(error);
      window.alert("Não foi possivel deletar o cliente");
    }
  };

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault();
    if (window.confirm("Deseja alterar o cliente?") === true) {
      try {
        await editClient({
          id: id,
          nome: name,
          logradouro: address,
          numero: number,
          bairro: neighborhood,
          cidade: city,
          uf: country,
        });
        handleClose();
        location.reload();
      } catch (error) {
        console.error(error);
      }
    } else {
      window.alert("Não foi possivel alterar o cliente");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          backgroundColor: "#fff",
          marginY: 10,
        }}
      >
        <form className={styles.formAdd} onSubmit={handleEdit}>
          <Button onClick={handleClose}>
            <CloseRounded />
          </Button>
          <TextField
            label="Nome"
            variant="outlined"
            required
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Box
            sx={{ display: { xs: "block", md: "flex", sm: "block" } }}
            justifyContent="space-around"
            alignItems="center"
          >
            <TextField
              label="UF"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              sx={{ minWidth: 350, maxWidth: 600 }}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Box>
          <Box
            sx={{ display: { xs: "block", md: "flex", sm: "block" } }}
            justifyContent="space-around"
            gap={3}
          >
            <TextField
              label="Cidade"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              type="text"
              sx={{ minWidth: 300 }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              label="Bairro"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              type="text"
              sx={{ minWidth: 300 }}
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "flex", sm: "block" } }}
            justifyContent="space-around"
            gap={3}
          >
            <TextField
              label="Logradouro"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              type="text"
              sx={{ minWidth: 300 }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              label="Nº"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              sx={{ minWidth: 50, maxWidth: 150 }}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Box>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Modal>
      <Box sx={{ maxWidth: 350, minWidth: 250, margin: 3 }}>
        <Card variant="outlined" className={styles.card_client}>
          <CardContent sx={{ minHeight: 250 }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginBottom={5}
              textAlign="center"
            >
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="@/public/icon.png"
                  sx={{ margin: "0 auto" }}
                >
                  C
                </Avatar>
                <Link href={`/cliente/${id}`}>
                  <Typography
                    variant="h2"
                    sx={{ fontSize: 32, fontWeight: 700 }}
                    color="text.secondary"
                  >
                    {nome}
                  </Typography>
                </Link>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {tipoDocumento}:{numeroDocumento}
                </Typography>
              </div>
            </Box>

            <Typography variant="h6">
              <SignpostOutlined /> {logradouro}, {numero}
            </Typography>

            <Typography variant="body2">
              <br />
              <PublicOutlined /> {bairro} - {cidade}/{uf}
            </Typography>
          </CardContent>

          <CardActions>
            <Button size="small" onClick={() => handleDelete(id)}>
              Trash
            </Button>
            <Button size="small" onClick={handleOpen}>
              Update
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
