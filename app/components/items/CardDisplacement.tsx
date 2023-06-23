import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PropsDisplacement } from "@/app/api/displacement/DisplacementList";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGlobalContext } from "@/app/context/store";
import { FinishDisplacement } from "@/app/hooks/useDisplacement";

export default function CardDisplacement({
  inicioDeslocamento,
  kmInicial,
  checkList,
  observacao,
  id,
}: PropsDisplacement) {
  const { deleteDisplacement, finishDisplacement } = useGlobalContext();

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

  const handleFinish = async (payload: FinishDisplacement) => {
    if (window.confirm("Deseja encerrar esse deslocamento?") == true) {
      try {
        await finishDisplacement(payload);
        window.alert("Condutor finalizado com sucesso!");
      } catch (error) {
        console.error("Erro!:", error);
      }
    } else {
      console.error("Cliente não deletado!");
    }
  };

  return (
    <>
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
            <Button size="small" onClick={() => handleDelete(id as number)}>
              Finalizar Deslocamento
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
