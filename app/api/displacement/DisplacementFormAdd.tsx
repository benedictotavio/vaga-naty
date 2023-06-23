"use client";

import { useGlobalContext } from "@/app/context/store";
import { CloseRounded } from "@mui/icons-material";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

const DispacementFormAdd = () => {
  const [open, setOpen] = useState(false);

  //Property
  const [inicialKm, setInicialKm] = useState<number>(0);
  const [inicialDisplacement, setInicialDisplacement] = useState(new Date());
  const [checkList, setCheckList] = useState("");
  const [reason, setReason] = useState("");
  const [observation, setObservation] = useState("");
  const [idConductor, setIdConductor] = useState<number>(0);
  const [idVehicle, setIdVehicle] = useState<number>(0);
  const [idClient, setIdClient] = useState<number>(0);

  const { startDisplacement } = useGlobalContext();

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      startDisplacement({
        kmInicial: 0,
        inicioDeslocamento: new Date(),
        checkList: "",
        motivo: "",
        observacao: "",
        idCondutor: 0,
        idVeiculo: 0,
        idCliente: 0,
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
        </form>
      </Modal>
      <Button onClick={handleOpen}>
        Adicionar novo deslocamento
      </Button>
    </>
  );
};

export default DispacementFormAdd;
