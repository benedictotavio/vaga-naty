"use client";

import { useGlobalContext } from "@/app/context/store";
import { AddCircleOutline, CloseRounded } from "@mui/icons-material";
import { Box, Button, FormControl, Modal, TextField } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";

const VehiclesFormAdd = () => {
  const [open, setOpen] = useState(false);

  // Property
  const [streetSign, setStreetSign] = useState("");
  const [yearManufacturing, setYearManufacturing] = useState<number>(1900);
  const [modelCar, setModelCar] = useState<string>("");
  const [actualKm, setActualKm] = useState<number>(0);

  const { saveVehicle } = useGlobalContext();

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      saveVehicle({
        anoFabricacao: yearManufacturing,
        kmAtual: actualKm,
        marcaModelo: modelCar,
        placa: streetSign,
      });
    } catch (error) {
      console.error(error);
      window.alert("Erro ao adicionar veiculo");
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
                  color="primary"
                  label="Modelo"
                  required
                  value={modelCar}
                  onChange={(e) => setModelCar(e.target.value)}
                />
                <TextField
                  type="number"
                  color="secondary"
                  label="Ano de fabricação"
                  required
                  value={yearManufacturing}
                  onChange={(e) => setYearManufacturing(+e.target.value)}
                />
                <TextField
                  id="text"
                  type="text"
                  label="Placa"
                  color="warning"
                  value={streetSign}
                  onChange={(e) => setStreetSign(e.target.value)}
                />
                <TextField
                  type="text"
                  color="warning"
                  label="Km Atual"
                  value={actualKm}
                  onChange={(e) => setActualKm(+e.target.value)}
                />
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
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        style={{ margin: 10 }}
      >
        <AddCircleOutline /> Adicionar Veiculo
      </Button>
    </>
  );
};

export default VehiclesFormAdd;
