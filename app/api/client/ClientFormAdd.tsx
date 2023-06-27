import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Modal,
} from "@mui/material";
import { useGlobalContext } from "@/app/context/store";
import styles from "./Client.module.css";
import { AddCircleOutline, CloseRounded } from "@mui/icons-material";

const ClientForm = () => {
  const { saveClient } = useGlobalContext();
  const [name, setName] = useState<string>("");
  const [documentNumber, setDocumentNumber] = useState<string>("");
  const [document, setDocument] = useState<string>("CPF");
  const [city, setCity] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await saveClient({
        nome: name,
        numeroDocumento: documentNumber,
        tipoDocumento: document,
        cidade: city,
        bairro: neighborhood,
        logradouro: address,
        numero: number,
        uf: country,
      });
      handleClose();
      setInterval(() => {
        setName("");
        setDocumentNumber("");
        setCity("");
        setNeighborhood("");
        setAddress("");
        setNumber("");
        setCountry("");
      }, 2500);
    } catch (error) {
      console.error(error);
    }
    window.alert("Cliente adicionado com sucesso!");
    location.reload();
  };

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

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{ backgroundColor: "#fff" }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <form className={styles.formAdd} onSubmit={handleSubmit}>
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
              <RadioGroup
                value={document}
                onChange={handleOptionChange}
                sx={{
                  display: { xs: "flex", md: "flex", sm: "flex" },
                  margin: "0 auto",
                }}
              >
                <div>
                  <FormControlLabel
                    value="CPF"
                    control={<Radio />}
                    label="CPF"
                  />
                  <FormControlLabel value="RG" control={<Radio />} label="RG" />
                </div>
                <div>
                  <FormControlLabel
                    value="CNH"
                    control={<Radio />}
                    label="CNH"
                  />
                  <FormControlLabel
                    value="CNPJ"
                    control={<Radio />}
                    label="CNPJ"
                  />
                </div>
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
              />
              <TextField
                label="UF"
                variant="outlined"
                required
                fullWidth
                margin="normal"
                type="text"
                sx={{ minWidth: 300 }}
                value={country}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCountry(e.target.value)
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
        </Box>
      </Modal>

      <Button onClick={handleOpen} variant="contained" color="primary">
        <AddCircleOutline /> Adicionar Cliente
      </Button>
    </>
  );
};

export default ClientForm;
