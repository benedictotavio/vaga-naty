import { PropsVehicles } from "@/app/api/vehicles/VehiclesList";
import { useGlobalContext } from "@/app/context/store";
import { Vehicles } from "@/app/hooks/useVehicles";
import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Link,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CardVehicles = ({
  anoFabricacao,
  kmAtual,
  marcaModelo,
  placa,
  id,
}: PropsVehicles) => {
  const { deleteVehicle } = useGlobalContext();
  const [streetSign, setStreetSign] = useState(placa);
  const [yearManufacturing, setYearManufacturing] =
    useState<number>(anoFabricacao);
  const [modelCar, setModelCar] = useState<string>(marcaModelo);
  const [actualKm, setActualKm] = useState<number>(kmAtual);
  const [open, setOpen] = useState(false);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };
  const handleDelete = async (user_id: number) => {
    if (window.confirm("Deseja deletar o condutor?") == true) {
      try {
        await deleteVehicle(user_id);
        window.alert("Condutor deletado com sucesso!");
      } catch (error) {
        console.error("Erro!:", error);
      }
    } else {
      console.error("Cliente não deletado!");
    }
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
        }}
      >
        <form>
          <Button onClick={handleClose}>
            <CloseRounded />
          </Button>
          <FormControl>
            <TextField
              type="text"
              color="primary"
              required
              defaultValue={streetSign}
              value={streetSign}
              onChange={(e) => setStreetSign(e.target.value)}
            />
            <TextField
              type="number"
              color="secondary"
              required
              defaultValue={yearManufacturing}
              value={yearManufacturing}
              onChange={(e) => setYearManufacturing(Number(e.target.value))}
            />
            <TextField
              type="text"
              color="warning"
              value={modelCar}
              onChange={(e) => setModelCar(e.target.value)}
            />
            <TextField
              type="text"
              color="warning"
              value={modelCar}
              onChange={(e) => setModelCar(e.target.value)}
            />
            <TextField
              type="number"
              color="secondary"
              required
              defaultValue={actualKm}
              value={actualKm}
              onChange={(e) => setActualKm(Number(e.target.value))}
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </Modal>
      <Box sx={{ maxWidth: 350, minWidth: 250, margin: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Link href={`/veiculo/${id}`}>{placa}</Link>
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              {marcaModelo}:{anoFabricacao}
            </Typography>
            <Typography variant="body2">
              <br />
              {kmAtual}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleDelete(id as number)}>
              Trash
            </Button>
            <Button size="small" onClick={handleOpen}>
              Update
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default CardVehicles;
