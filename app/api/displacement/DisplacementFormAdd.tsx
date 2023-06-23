"use client";

import { useGlobalContext } from "@/app/context/store";
import { AddCircleOutline, CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

const DispacementFormAdd = () => {
  //Property
  const [inicialKm, setInicialKm] = useState<number>(0);
  const [inicialDisplacement, setInicialDisplacement] = useState(new Date());
  const [checkList, setCheckList] = useState("");
  const [reason, setReason] = useState("");
  const [observation, setObservation] = useState("");
  const [idConductor, setIdConductor] = useState<number>(0);
  const [idVehicle, setIdVehicle] = useState<number>(0);
  const [idClient, setIdClient] = useState<number>(0);

  const { startDisplacement, allVehicles, allClients, allConductors } =
    useGlobalContext();
  const [open, setOpen] = useState(false);

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
      <Button onClick={handleOpen} variant="contained" color="primary">
        <AddCircleOutline />
        Adicionar novo deslocamento
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Button onClick={handleClose}>
            <CloseRounded />
          </Button>
          <Typography>Crie um novo deslocamento</Typography>
          <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Selecione o cliente
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={idClient}
                onChange={(e) => setIdClient(+e.target.value)}
                autoWidth
                label="Client"
              >
                {allClients.map((item) => (
                  <>
                    <MenuItem value={item.id}>{item.nome}</MenuItem>
                  </>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Selecione o condutor
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={idConductor}
                onChange={(e) => setIdConductor(+e.target.value)}
                autoWidth
                label="Conductor"
              >
                {allConductors.map((item) => (
                  <>
                    <MenuItem value={item.id}>{item.nome}</MenuItem>
                  </>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Selecione o veiculo
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={idVehicle}
                onChange={(e) => setIdVehicle(+e.target.value)}
                autoWidth
                label="Vehicle"
              >
                {allVehicles.map((item) => (
                  <>
                    <MenuItem value={item.id}>
                      {item.marcaModelo} - {item.placa}
                    </MenuItem>
                  </>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <Box width={300}>
              <Slider
                defaultValue={inicialKm}
                value={inicialKm}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChange={(e: any) =>
                  setInicialKm(+e.target.value)
                }
              />
            </Box>
          </div>
          <div>
            <TextField
              id="dateInput"
              label="Select a date"
              type="date"
              color="warning"
              defaultValue={inicialDisplacement}
              value={inicialDisplacement}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInicialDisplacement(new Date(e.target.value))
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div>
            <TextField
              type="text"
              color="primary"
              required
              defaultValue={checkList}
              value={checkList}
              onChange={(e) => setCheckList(e.target.value)}
            />
          </div>
          <div>
            <TextField
              type="text"
              color="primary"
              required
              defaultValue={reason}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div>
            <TextField
              type="text"
              color="primary"
              required
              defaultValue={reason}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
          <div>
            <TextField
              type="text"
              color="primary"
              required
              defaultValue={observation}
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default DispacementFormAdd;
