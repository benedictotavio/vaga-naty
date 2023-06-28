"use client";

import CarMoving from "@/app/components/animation/CarMoving";
import { useGlobalContext } from "@/app/context/store";
import { Displacement, FinishDisplacement } from "@/app/hooks/useDisplacement";
import { CloseRounded } from "@mui/icons-material";
import { Box, Button, FormControl, Modal, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";

type IPropsSectionDisplacement = {
  id: number;
};

const DisplacementSection = ({ id }: IPropsSectionDisplacement) => {
  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<Displacement>({
    id: id,
    fimDeslocamento: new Date(),
    kmFinal: 0,
    observacao: "",
    checkList: "",
    idCliente: 0,
    idCondutor: 0,
    idVeiculo: 0,
    inicioDeslocamento: new Date(),
    kmInicial: 0,
    motivo: "",
  });

  const { getDisplacementById, finishDisplacement } = useGlobalContext();

  useEffect(() => {
    getDisplacementById(id).then((res) => setUser(res));
  }, [getDisplacementById, id]);

  const [finalKm, setFinalKm] = useState<number>(user.kmFinal);
  const [obs, setObs] = useState<string>(user.observacao);

  const handleFinish = async () => {
    if (window.confirm("Deseja encerrar esse deslocamento?") == true) {
      try {
        await finishDisplacement({
          fimDeslocamento: new Date(),
          id: id,
          kmFinal: finalKm,
          observacao: obs,
        });
        window.alert("Condutor finalizado com sucesso!");
      } catch (error) {
        console.error("Erro!:", error);
      }
      location.reload();
    } else {
      console.error("Cliente não deletado!");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
          marginY: 10,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <div>
            <Button onClick={handleClose}>
              <CloseRounded />
            </Button>
            <form onSubmit={handleFinish}>
              <FormControl>
                <Box>
                  <TextField
                    type="text"
                    color="primary"
                    label="Km Final"
                    required
                    defaultValue={finalKm}
                    value={finalKm}
                    onChange={(e) => setFinalKm(+e.target.value)}
                  />
                </Box>
                <Box>
                  <TextField
                    type="text"
                    color="primary"
                    label="Observação"
                    required
                    defaultValue={obs}
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                  />
                </Box>
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minWidth: 350,
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black"
          }}
        >
          <Box
            sx={{
              minWidth: 400,
              display: { xs: "none", md: "flex", sm: "none" },
            }}
          >
            <CarMoving />
          </Box>

          <Box>
            <h3>{user.kmInicial}</h3>
            <h3>
              {new Date(user.inicioDeslocamento).toLocaleDateString("pt-br", {
                dateStyle: "medium",
              })}
            </h3>
            <h3>{user.motivo}</h3>
            <h3>{user.observacao}</h3>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={handleOpen}
        >
          Finalizar Deslocamento
        </Button>
      </Box>
    </>
  );
};

export default DisplacementSection;
