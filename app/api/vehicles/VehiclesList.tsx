"use client";

import CardVehicles from "@/app/components/items/CardVehicles";
import { useGlobalContext } from "@/app/context/store";
import { Vehicles } from "@/app/hooks/useVehicles";

export interface PropsVehicles extends Vehicles {
  id?: number;
}

const VehiclesList = () => {
  const { allVehicles } = useGlobalContext();

  return (
    <>
      {allVehicles.map((item) => (
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
      ))}
    </>
  );
};
export default VehiclesList;
