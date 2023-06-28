import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Delete } from "@mui/icons-material";
import { PropsCondutor } from "@/app/api/conductor/ConductorList";
import { useGlobalContext } from "@/app/context/store";
import { Button, Link } from "@mui/material";

const CardConductor = ({ id, nome, numeroHabilitacao }: PropsCondutor) => {
  const { deleteConductor } = useGlobalContext();

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
    <ListItem
      sx={{ border: "1px solid black", borderRadius: 10, m: 0.5 }}
      secondaryAction={
        <Button size="small">
          <Delete onClick={() => handleDelete(id as number)} />
        </Button>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <Link href={`/condutor/${id}`}>
        <ListItemText primary={nome} secondary={numeroHabilitacao} />
      </Link>
    </ListItem>
  );
};

export default CardConductor;
