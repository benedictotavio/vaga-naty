import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PropsDisplacement } from "@/app/api/displacement/DisplacementList";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalContext } from "@/app/context/store";
import { useState } from "react";
import { CloseRounded } from "@mui/icons-material";

export default function CardDisplacement({
  inicioDeslocamento,
  kmInicial,
  checkList,
  observacao,
  id,
}: PropsDisplacement) {
  
  const { deleteDisplacement } = useGlobalContext();

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDelete = async (user_id: number) => {
    if (window.confirm("Deseja deletar esse deslocamento?") == true) {
      try {
        await deleteDisplacement(user_id);
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
          marginY: 10,
        }}
      >
        <Box>
          <div>
            <div>
              <Button onClick={handleClose}>
                <CloseRounded />
              </Button>
            </div>
            <div>
              <h1>{id}</h1>
              <h4>
                {new Date(inicioDeslocamento).toLocaleDateString("pt-br", {
                  dateStyle: "medium",
                })}
              </h4>
            </div>
            <Button href={`/deslocamento/${id}`}>Finalizar Deslocamento</Button>
          </div>
        </Box>
      </Modal>

      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography>{kmInicial}</Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {new Date(inicioDeslocamento).toLocaleDateString("pt-br", {
                dateStyle: "medium",
              })}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2"></Typography>

            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>checkList</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{checkList}</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Observação</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{observacao}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleDelete(id as number)}>
              Delete
            </Button>
            <Button size="small" onClick={handleOpen}>
              Visão Geral
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
