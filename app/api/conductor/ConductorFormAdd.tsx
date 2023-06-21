"use client"

import { useGlobalContext } from "@/app/context/store";
import { AddCircleOutline, CloseRounded } from "@mui/icons-material";
import { Button, FormControl, Modal, TextField } from "@mui/material";
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
        categoriaHabilitacao: cnhCategory,
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
      >
        <form onSubmit={handleSubmit}>
          <Button onClick={handleClose}>
            <CloseRounded />
          </Button>
          <FormControl>
            <TextField
              type="text"
              color="primary"
              required
              defaultValue={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              type="text"
              color="secondary"
              required
              defaultValue={cnh}
              value={cnh}
              onChange={(e) => setCnh(e.target.value)}
            />
            <TextField
              id="dateInput"
              label="Select a date"
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
              color="warning"
              value={cnhCategory}
              onChange={(e) => setCnhCategory(e.target.value)}
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </Modal>
      <Button onClick={handleOpen} variant="contained" color="primary">
        <AddCircleOutline /> Adicionar Condutor
      </Button>
    </>
  );
};

export default ConductorFormAdd;
