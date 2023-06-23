import { useEffect, useState } from "react";

export type Conductor = {
  id?:number,
  nome: string;
  numeroHabilitacao: string;
  catergoriaHabilitacao: string;
  vencimentoHabilitacao: Date;
};

export interface UpdateConductor extends Partial<Conductor> {
  id: number;
}

export default function useConductor() {
  const [allConductors, setallConductors] = useState<Conductor[]>([]);

  useEffect(() => {
    getConductors().then((res) => setallConductors(res));
  }, []);

  async function getConductorById(id: number) {
    try {
      const response = await fetch(
        `https://api-deslocamento.herokuapp.com/api/v1/Condutor/${id}`
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function getConductors() {
    try {
      const response = await fetch(
        "https://api-deslocamento.herokuapp.com/api/v1/Condutor"
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function saveConductor(payload: Conductor): Promise<void> {
    if (payload) {
      try {
        await fetch("https://api-deslocamento.herokuapp.com/api/v1/Condutor", {
          method: "POST",
          cache: "default",
          headers: { "Content-type": "application/json;charset=UTF-8" },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error("Não foi possivel adicionar o condutor!");
    }
  }
  async function deleteConductor(id: number) {
    if (id) {
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Condutor/${id}`,
          {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify({ id: id }),
          }
        ).then((res) => res.json());
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error("Erro ao deletar");
    }
  }
  async function editConductor(payload: UpdateConductor) {
    if (payload) {
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Condutor/${payload.id}`,
          {
            method: "PUT",
            cache: "default",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(payload),
          }
        )
      } catch (error) {
        console.error(error);
      }
    } else {
      throw new Error("Erro ao deletar");
    }
  }
  return {
    saveConductor,
    getConductors,
    editConductor,
    deleteConductor,
    getConductorById,
    allConductors
  };
}
