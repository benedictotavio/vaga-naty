"use client";

import CarMoving from "@/app/components/animation/CarMoving";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useGlobalContext } from "@/app/context/store";
import { Displacement } from "@/app/hooks/useDisplacement";
import { CloseRounded } from "@mui/icons-material";
import { Box, Button, FormControl, Modal, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";

type IPropsSectionDisplacement = {
  id: number;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DisplacementSection = ({ id }: IPropsSectionDisplacement) => {
  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<Displacement>({
    id: id,
    fimDeslocamento: new Date(),
    kmFinal: 0,
    observacao: "",
    checkList: "",
    idCliente: 0,
    idCondutor: 0,
    idVeiculo: 0,
    inicioDeslocamento: new Date(),
    kmInicial: 0,
    motivo: "",
  });

  const [conductor, setConductor] = useState("cliente");
  const [vehicle, setVehicle] = useState("veiculo");
  const [client, setClient] = useState("cliente");

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    getDisplacementById,
    finishDisplacement,
    getConductorById,
    getVehicleById,
    getClientById,
  } = useGlobalContext();

  useEffect(() => {
    getDisplacementById(id).then((res) => {
      setUser(res);
      getConductorById(res.idCondutor).then((res) => setConductor(res.nome));
      getVehicleById(res.idVeiculo).then((res) => setVehicle(res.marcaModelo));
      getClientById(res.idCliente).then((res) => setClient(res.nome));
    });
  }, [
    getClientById,
    getConductorById,
    getDisplacementById,
    getVehicleById,
    id,
  ]);

  const [finalKm, setFinalKm] = useState<number>(user.kmFinal);
  const [obs, setObs] = useState<string>(user.observacao);

  const handleFinish = async () => {
    if (window.confirm("Deseja encerrar esse deslocamento?") == true) {
      try {
        await finishDisplacement({
          fimDeslocamento: new Date(),
          id: id,
          kmFinal: finalKm,
          observacao: obs,
        });
        window.alert("Condutor finalizado com sucesso!");
      } catch (error) {
        console.error("Erro!:", error);
      }
      location.reload();
    } else {
      console.error("Cliente não deletado!");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <div>
            <Button onClick={handleClose}>
              <CloseRounded />
            </Button>
            <form onSubmit={handleFinish}>
              <FormControl>
                <Box>
                  <TextField
                    type="text"
                    color="primary"
                    label="Km Final"
                    required
                    defaultValue={finalKm}
                    value={finalKm}
                    onChange={(e) => setFinalKm(+e.target.value)}
                  />
                </Box>
                <Box>
                  <TextField
                    type="text"
                    color="primary"
                    label="Observação"
                    required
                    defaultValue={obs}
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                  />
                </Box>
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
      <Box display="flex" justifyContent="center">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={client}
            subheader={new Date(user.inicioDeslocamento).toLocaleDateString(
              "pt-br",
              {
                dateStyle: "medium",
              }
            )}
          />
          <CarMoving />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {vehicle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.kmInicial}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Button
              aria-label="finish-displacement"
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Finalizar Deslocamento
            </Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more info"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Motivo:</Typography>
              <Typography paragraph>{user.motivo}</Typography>
              <Typography variant="h5">Condutor:</Typography>
              <Typography variant="h6">{conductor}</Typography>
              <Typography paragraph>{user.observacao}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
};

export default DisplacementSection;
