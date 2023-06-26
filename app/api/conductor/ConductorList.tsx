"use client";

import CardConductor from "@/app/components/items/CardConductor";
import { useGlobalContext } from "@/app/context/store";
import { Conductor } from "@/app/hooks/useConductor";
import { Box } from "@mui/material";

export interface PropsCondutor extends Conductor {
  id?: number;
}

const ConductorList = () => {
  const { allConductors } = useGlobalContext();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          {allConductors.map((item) => (
            <CardConductor
              key={item.id}
              nome={item.nome}
              numeroHabilitacao={item.numeroHabilitacao}
              catergoriaHabilitacao={item.catergoriaHabilitacao}
              vencimentoHabilitacao={item.vencimentoHabilitacao}
              id={item.id}
            />
          ))}
        </div>
      </Box>
    </>
  );
};

export default ConductorList;
