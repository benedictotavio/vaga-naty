import { useState } from "react";
import { Client } from "./ClientList";
import { Button, TextField } from "@mui/material";

type ClientFormProps = {
  onAddUser: (payload: Client) => void;
};

const ClientForm = ({ onAddUser }: ClientFormProps) => {
  const [name, setName] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [document, setDocument] = useState<"CPF" | "RG" | "CNH">("CPF");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      name.trim() !== "" &&
      documentNumber.trim() !== "" &&
      document.trim() !== ""
    ) {
      onAddUser({
        nome: name,
        numeroDocumento: documentNumber,
        tipoDocumento: document,
        cidade: city,
        bairro: neighborhood,
        logradouro: adress,
        numero: number,
        uf: country,
      });
      setName("");
      setDocumentNumber("");
      setCity("");
      setNeighborhood("");
      setAdress("");
      setNumber("");
      setCountry("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField label="Nome" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Tipo de Documento"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Numero do Domuento"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cidade"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Bairro"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Logradouro"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField label="Nº" variant="outlined" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ClientForm;
