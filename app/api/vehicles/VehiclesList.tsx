"use client";

import CardVehicles from "@/app/components/items/CardVehicles";
import { useGlobalContext } from "@/app/context/store";
import { Vehicles } from "@/app/hooks/useVehicles";
import { Box } from "@mui/material";

export interface PropsVehicles extends Vehicles {
  id?: number;
}

const VehiclesList = () => {
  const { allVehicles } = useGlobalContext();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {allVehicles.length > 0 ? (
          allVehicles.map((item) => (
            <>
              <CardVehicles
                key={item.id}
                id={item.id}
                placa={item.placa}
                marcaModelo={item.marcaModelo}
                anoFabricacao={item.anoFabricacao}
                kmAtual={item.kmAtual}
              />
            </>
          ))
        ) : (
          <div>Não ha veiculos cadastrados.</div>
        )}
      </Box>
    </>
  );
};
export default VehiclesList;
