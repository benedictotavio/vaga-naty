"use client";

import { useGlobalContext } from "@/app/context/store";
import { Vehicles } from "@/app/hooks/useVehicles";
import { useEffect, useState } from "react";

type PropVehicle = {
  id: number;
};

const VehicleSection = ({ id }: PropVehicle) => {
  const [vehicle, setVehicle] = useState<Vehicles>({
    anoFabricacao: 0,
    kmAtual: 0,
    marcaModelo: "",
    placa: "",
  });

  const { getVehicleById } = useGlobalContext();

  useEffect(() => {
    getVehicleById(id).then((res) => setVehicle(res));
  }, [getVehicleById, id]);

  return (
    <>
      <div>
        <h1>{vehicle.placa}</h1>
        <h3>{vehicle.marcaModelo}</h3>
      </div>
      <div>
        <h4>{vehicle.kmAtual}</h4>
        <h4>{vehicle.anoFabricacao}</h4>
      </div>
    </>
  );
};

export default VehicleSection;
