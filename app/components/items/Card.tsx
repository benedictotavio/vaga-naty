"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Client } from "@/app/api/client/ClientList";
import { useClientContext } from "@/app/context/ClientStore";
import {
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import styles from "../../api/client/ClientFormAdd.module.css";
import { UpdateClient } from "@/app/hooks/useClient";

export default function ViewCard({
  nome,
  cidade,
  logradouro,
  bairro,
  numero,
  numeroDocumento,
  tipoDocumento,
  uf,
  id,
}: Client) {
  const { deleteClient, editClient } = useClientContext();
  const [name, setName] = useState<string>(nome);
  const [documentNumber, setDocumentNumber] = useState<string>(numeroDocumento);
  const [document, setDocument] = useState<string>(tipoDocumento);
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

  const handleOptionChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDocument(event.target.value);
  };

  const handleDelete = async (user_id: number) => {
    console.log(user_id);
    try {
      await deleteClient(user_id);
    } catch (error) {
      console.error(error);
      window.alert("Não foi possivel deletar o cliente");
    }
  };

  const handleEdit = async (payload: UpdateClient) => {
    try {
      if (payload) {
        console.log(payload);
        await editClient(payload);
      }
    } catch (error) {
      console.error(error);
      window.alert("Não foi possivel editar o cliente");
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
        <form
          className={styles.formAdd}
          onSubmit={() =>
            handleEdit({
              id: id as number,
              nome: name,
              numeroDocumento: documentNumber,
              tipoDocumento: document,
              cidade: city,
              bairro: neighborhood,
              logradouro: address,
              numero: number,
              uf: country,
            })
          }
        >
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Box
            sx={{ display: { xs: "block", md: "flex", sm: "block" } }}
            justifyContent="space-around"
            alignItems="center"
          >
            <RadioGroup value={document} onChange={handleOptionChange}>
              <FormControlLabel
                value="CPF"
                control={<Radio />}
                label="CPF"
                defaultChecked
              />
              <FormControlLabel value="RG" control={<Radio />} label="RG" />
              <FormControlLabel value="CNH" control={<Radio />} label="CNH" />
              <FormControlLabel value="CNPJ" control={<Radio />} label="CNPJ" />
            </RadioGroup>

            <TextField
              label="Numero do Domuento"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ minWidth: 350, maxWidth: 600 }}
              value={documentNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDocumentNumber(e.target.value)
              }
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
              sx={{ minWidth: 300 }}
              value={city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCity(e.target.value)
              }
            />
            <TextField
              label="Bairro"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              sx={{ minWidth: 300 }}
              value={neighborhood}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNeighborhood(e.target.value)
              }
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
              sx={{ minWidth: 300 }}
              value={address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAddress(e.target.value)
              }
            />
            <TextField
              label="Nº"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              sx={{ minWidth: 50, maxWidth: 150 }}
              value={number}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNumber(e.target.value)
              }
            />
          </Box>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Modal>

      <Box sx={{ maxWidth: 350, minWidth: 250, margin: 3 }}>
        <Card variant="outlined">
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
            <Button size="small" onClick={() => handleDelete(id as number)}>
              Trash
            </Button>
            <Button size="small" onClick={handleOpen}>
              Update
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
