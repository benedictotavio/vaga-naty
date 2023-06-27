"use client";

import { useGlobalContext } from "@/app/context/store";
import { AddCircleOutline, CloseRounded } from "@mui/icons-material";
import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const ConductorFormAdd = () => {
  const [open, setOpen] = useState(false);

  // Property
  const [name, setName] = useState("");
  const [cnh, setCnh] = useState("");
  const [expireCnh, setExpireCnh] = useState(new Date());
  const [cnhCategory, setCnhCategory] = useState("");

  const { saveConductor } = useGlobalContext();

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      saveConductor({
        catergoriaHabilitacao: cnhCategory,
        nome: name,
        numeroHabilitacao: cnh,
        vencimentoHabilitacao: expireCnh,
      });
    } catch (error) {
      window.alert("Erro ao adicionar o condutor");
    }
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
          <div>
            <Button onClick={handleClose}>
              <CloseRounded />
            </Button>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <TextField
                  type="text"
                  sx={{ minWidth: 350, maxWidth: 600 }}
                  color="primary"
                  label="Nome"
                  required
                  defaultValue={name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  type="text"
                  sx={{ minWidth: 350, maxWidth: 600 }}
                  color="secondary"
                  label="Nº CNH"
                  required
                  defaultValue={cnh}
                  value={cnh}
                  onChange={(e) => setCnh(e.target.value)}
                />
                <TextField
                  id="dateInput"
                  sx={{ minWidth: 350, maxWidth: 600 }}
                  label="Selecione a data"
                  type="date"
                  color="warning"
                  defaultValue={expireCnh}
                  value={expireCnh}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setExpireCnh(new Date(e.target.value))
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  type="text"
                  sx={{ minWidth: 350, maxWidth: 600 }}
                  color="warning"
                  label="Categoria CNH"
                  value={cnhCategory}
                  onChange={(e) => setCnhCategory(e.target.value)}
                />
              </FormControl>
            </form>
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </div>
        </Box>
      </Modal>

      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        style={{ margin: 10 }}
      >
        <AddCircleOutline /> Adicionar Condutor
      </Button>
    </>
  );
};

export default ConductorFormAdd;
