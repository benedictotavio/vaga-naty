import { PropsVehicles } from "@/app/api/vehicles/VehiclesList";
import { useGlobalContext } from "@/app/context/store";
import { UpdateVehicles } from "@/app/hooks/useVehicles";
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
  const { deleteVehicle, editVehicle } = useGlobalContext();
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
    if (window.confirm("Deseja deletar o veiculo?") == true) {
      try {
        await deleteVehicle(user_id);
        window.alert("Veiculo deletado com sucesso!");
      } catch (error) {
        console.error("Erro!:", error);
      }
    } else {
      console.error("Cliente não deletado!");
    }
  };

  const handleEdit = async () => {
    if (window.confirm("Deseja editar o veiculo?") == true) {
      try {
        await editVehicle({
          id: id as number,
          anoFabricacao: yearManufacturing,
          kmAtual: actualKm,
          marcaModelo: modelCar,
          placa: streetSign,
        });
        window.alert("Veiculo alterado com sucesso!");
      } catch (error) {
        console.error(error);
        window.alert("Não foi possivel editar o cliente!");
        return;
      }
      location.reload();
    } else {
      console.error("Erro!");
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <div>
            <Button onClick={handleClose}>
              <CloseRounded />
            </Button>
            <form onSubmit={handleEdit}>
              <FormControl>
                <TextField
                  type="text"
                  color="primary"
                  label="Placa"
                  required
                  defaultValue={streetSign}
                  value={streetSign}
                  onChange={(e) => setStreetSign(e.target.value)}
                />
                <TextField
                  type="number"
                  color="secondary"
                  label="Ano de Fabricação"
                  required
                  defaultValue={yearManufacturing}
                  value={yearManufacturing}
                  onChange={(e) => setYearManufacturing(+e.target.value)}
                />
                <TextField
                  type="text"
                  color="warning"
                  label="Modelo"
                  value={modelCar}
                  onChange={(e) => setModelCar(e.target.value)}
                />
                <TextField
                  type="number"
                  color="secondary"
                  label="Km Atual"
                  required
                  defaultValue={actualKm}
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
