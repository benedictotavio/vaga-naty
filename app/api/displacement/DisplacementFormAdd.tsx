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
        kmInicial: inicialKm,
        inicioDeslocamento: inicialDisplacement,
        checkList: checkList,
        motivo: reason,
        observacao: observation,
        idCondutor: idConductor,
        idVeiculo: idVehicle,
        idCliente: idClient,
      });
    } catch (error) {
      window.alert("Erro ao adicionar o condutor");
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        style={{ margin: 10 }}
      >
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <div>
            <Button onClick={handleClose}>
              <CloseRounded />
            </Button>
            <form onSubmit={handleSubmit}>
              <Typography>Crie um novo deslocamento</Typography>
              <div>
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Selecione o cliente
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={idClient}
                    onChange={(e) => setIdClient(+e.target.value)}
                    autoWidth
                    label="Cliente"
                  >
                    {allClients.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Selecione o condutor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={idConductor}
                    onChange={(e) => setIdConductor(+e.target.value)}
                    autoWidth
                    label="Condutor"
                  >
                    {allConductors.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Selecione o veiculo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={idVehicle}
                    onChange={(e) => setIdVehicle(+e.target.value)}
                    autoWidth
                    label="Veiculo"
                  >
                    {allVehicles.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.marcaModelo} - {item.placa}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <Box width={300}>
                  <Typography>Km Inicial</Typography>
                  <Slider
                    defaultValue={inicialKm}
                    value={inicialKm}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    onChange={(e: any) => setInicialKm(+e.target.value)}
                  />
                </Box>
              </div>
              <div>
                <TextField
                  id="dateInput"
                  label="Selecione a data"
                  type="date"
                  color="warning"
                  sx={{ m: 1, minWidth: 375 }}
                  defaultValue={inicialDisplacement}
                  value={inicialDisplacement}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInicialDisplacement(new Date(e.target.value))
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  type="text"
                  color="primary"
                  label="CheckList"
                  required
                  sx={{ m: 1, minWidth: 375 }}
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
                  label="Motivo"
                  sx={{ m: 1, minWidth: 375 }}
                  defaultValue={reason}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                <TextField
                  type="text"
                  color="primary"
                  required
                  label="Observação"
                  sx={{ m: 1, minWidth: 375 }}
                  defaultValue={observation}
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                />
              </div>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default DispacementFormAdd;
