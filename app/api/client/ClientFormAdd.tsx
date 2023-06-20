import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useClientContext } from "@/app/context/ClientStore";

const ClientForm = () => {
  const { saveClient } = useClientContext();

  const [name, setName] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [document, setDocument] = useState<string>("CPF");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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

    window.alert("Task Adicionada com sucesso!");
  };

  const handleOptionChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDocument(event.target.value);
    console.log(document);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ margin: "5px 20px" }}>
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
        >
          <RadioGroup value={document} onChange={handleOptionChange}>
            <FormControlLabel value="CPF" control={<Radio />} label="CPF" />
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
    </>
  );
};

export default ClientForm;