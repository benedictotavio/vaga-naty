import { useEffect, useState } from "react";
import { PropsVehicles } from "../api/vehicles/VehiclesList";

export type Vehicles = {
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
};

export interface UpdateVehicles extends Partial<Vehicles> {
  id: number;
}

export default function useVehicles() {
  
  const [allVehicles, setAllVehicles] = useState<PropsVehicles[]>([]);

  useEffect(() => {
    getVehicles().then((res) => setAllVehicles(res));
  }, []);

  async function getVehicleById(id: number): Promise<UpdateVehicles | void> {
    try {
      const response = await fetch(
        `https://api-deslocamento.herokuapp.com/api/v1/Veiculo/${id}`
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error("Erro: ", error);
    }
  }
  async function getVehicles() {
    try {
      const response = await fetch(
        "https://api-deslocamento.herokuapp.com/api/v1/Veiculo"
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function saveVehicle(payload: Vehicles) {
    if (payload) {
      try {
        await fetch("https://api-deslocamento.herokuapp.com/api/v1/Veiculo", {
          method: "POST",
          cache: "default",
          headers: { "Content-type": "application/json;charset=UTF-8" },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error("Não foi possivel realizar a requisição!");
    }
  }
  async function deleteVehicle(id: number) {
    if (id) {
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Veiculo/${id}`,
          {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify({ id: id }),
          }
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error("Erro ao deletar");
    }
  }
  async function editVehicle(payload: UpdateVehicles) {
    if (payload) {
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Veiculo/${payload.id}`,
          {
            method: "PUT",
            cache: "default",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(payload),
          }
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error("Erro ao deletar");
    }
  }
  return {
    saveVehicle,
    deleteVehicle,
    editVehicle,
    getVehicleById,
    allVehicles
  };
}
