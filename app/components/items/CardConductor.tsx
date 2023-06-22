import { PropsCondutor } from "@/app/api/conductor/ConductorList";
import { useGlobalContext } from "@/app/context/store";
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
import { ChangeEvent, useState } from "react";

const CardConductor = ({
  catergoriaHabilitacao,
  id,
  nome,
  numeroHabilitacao,
  vencimentoHabilitacao,
}: PropsCondutor) => {
  const { deleteConductor } = useGlobalContext();
  const [name, setName] = useState(nome);
  const [cnh, setCnh] = useState(numeroHabilitacao);
  const [expireCnh, setExpireCnh] = useState(vencimentoHabilitacao);
  const [cnhCategory, setCnhCategory] = useState(catergoriaHabilitacao);
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
        await deleteConductor(user_id);
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
      <Box sx={{ maxWidth: 350, minWidth: 250, margin: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Link href={`/condutor/${id}`}>{nome}</Link>
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              {catergoriaHabilitacao}:{numeroHabilitacao}
            </Typography>
            <Typography variant="h5" component="div">
              Vencimento:{" "}
              {new Date(expireCnh).toLocaleDateString("pt-br", {
                dateStyle: "long",
              })}
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

export default CardConductor;
