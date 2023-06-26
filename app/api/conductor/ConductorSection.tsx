"use client";

import { useGlobalContext } from "@/app/context/store";
import React, { ChangeEvent, useEffect, useState } from "react";
import { PropsCondutor } from "./ConductorList";
import { UpdateConductor } from "@/app/hooks/useConductor";
import { Button, FormControl, Modal, TextField } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

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
  const [name, setName] = useState(user.nome);
  const [cnh, setCnh] = useState(user.numeroHabilitacao);
  const [expireCnh, setExpireCnh] = useState(user.vencimentoHabilitacao);
  const [cnhCategory, setCnhCategory] = useState(user.catergoriaHabilitacao);

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

  useEffect(() => {
    getConductorById(id).then((res) => setUser(res));
  }, [getConductorById, id]);

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
          onSubmit={() =>
            handleEdit({
              id: id,
              catergoriaHabilitacao: cnhCategory,
              nome: name,
              numeroHabilitacao: cnh,
              vencimentoHabilitacao: expireCnh,
            })
          }
        >
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
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <h4>{cnhCategory}</h4>
        <h4>{cnh}</h4>
      </div>
      <div>
        <button onClick={handleOpen}>
          Editar
        </button>
      </div>
    </>
  );
};

export default UserSection;
