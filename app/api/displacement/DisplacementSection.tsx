import { useGlobalContext } from "@/app/context/store";
import { Displacement, FinishDisplacement } from "@/app/hooks/useDisplacement";
import { Box, FormControl, Modal, TextField } from "@mui/material";

import React, { useEffect, useState } from "react";

type IPropsSectionDisplacement = {
  id: number;
};

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

  const { getDisplacementById, finishDisplacement } = useGlobalContext();

  useEffect(() => {
    getDisplacementById(id).then((res) => setUser(res));
  }, [getDisplacementById, id]);

  const [finalKm, setFinalKm] = useState<number>(user.kmFinal);
  const [obs, setObs] = useState<string>(user.observacao);

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFinish({
              id: id,
              fimDeslocamento: new Date(),
              kmFinal: finalKm,
              observacao: obs,
            });
            location.reload();
          }}
        >
          <FormControl>
            <Box>
              <TextField
                type="text"
                color="primary"
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
                required
                defaultValue={obs}
                value={obs}
                onChange={(e) => setObs(e.target.value)}
              />
            </Box>
          </FormControl>
        </form>
      </Modal>

      <Box>
        <div>
          <h3>{user.observacao}</h3>
          <h3>{user.kmInicial}</h3>
          <h3>
            {new Date(user.inicioDeslocamento).toLocaleDateString("pt-br", {
              dateStyle: "medium",
            })}
          </h3>
        </div>
        <div>
          <button onClick={handleOpen}>Finalizar Deslocamento</button>
        </div>
      </Box>
    </>
  );
};

export default DisplacementSection;
