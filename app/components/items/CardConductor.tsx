import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import { Delete, Edit } from "@mui/icons-material";
import { PropsCondutor } from "@/app/api/conductor/ConductorList";
import { useGlobalContext } from "@/app/context/store";
import { UpdateConductor } from "@/app/hooks/useConductor";
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
  const { deleteConductor, editConductor } = useGlobalContext();

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
              id: id as number,
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
      <List sx={{ minWidth: 400, bgcolor: "background.paper" }}>
        <ListItem
          secondaryAction={
            <>
              <Button size="small">
                <Delete onClick={() => handleDelete(id as number)} />
              </Button>
            </>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <Link href={`/condutor/${id}`}>
            <ListItemText primary={name} secondary={cnh} />
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default CardConductor;
