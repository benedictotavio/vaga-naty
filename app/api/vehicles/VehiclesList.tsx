"use client";

import CardVehicles from "@/app/components/items/CardVehicles";
import { useGlobalContext } from "@/app/context/store";
import { Vehicles } from "@/app/hooks/useVehicles";
import { useEffect, useState } from "react";

export interface PropsVehicles extends Vehicles {
  id?: number;
}

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState<PropsVehicles[]>([]);
  const { getVehicles } = useGlobalContext();

  useEffect(() => {
    getVehicles().then((res) => setVehicles(res));
  }, [getVehicles]);

  return (
    <>
      {vehicles.map((item: PropsVehicles) => (
        <CardVehicles
          key={item.id}
          placa={item.placa}
          marcaModelo={item.marcaModelo}
          anoFabricacao={item.anoFabricacao}
          kmAtual={item.kmAtual}
        />
      ))}
    </>
  );
};
export default VehiclesList
