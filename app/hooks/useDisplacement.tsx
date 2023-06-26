export type StartDisplacement = {
  kmInicial: number;
  inicioDeslocamento: Date;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
};

export type FinishDisplacement = {
  id: number;
  kmFinal: number;
  fimDeslocamento: Date;
  observacao: string;
};

export interface Displacement extends FinishDisplacement {
  kmInicial: number;
  inicioDeslocamento: Date;
  checkList: string;
  motivo: string;
  observacao: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

export default function useDisplacement() {
  async function startDisplacement(payload: StartDisplacement) {
    if (payload) {
      try {
        await fetch(
          "https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/IniciarDeslocamento",
          {
            method: "POST",
            cache: "default",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(payload),
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  }
  async function getDisplacements() {
    try {
      const response = await fetch(
        "https://api-deslocamento.herokuapp.com/api/v1/Deslocamento"
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function getDisplacementById(id: number) {
    try {
      const response = await fetch(
        `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/${id}`
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteDisplacement(id: number) {
    if (id) {
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/${id}`,
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
  async function finishDisplacement(payload: FinishDisplacement) {
    if (payload) {
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/${payload.id}/EncerrarDeslocamento`,
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
      throw new Error("Erro ao encerrar");
    }
  }
  return {
    deleteDisplacement,
    finishDisplacement,
    getDisplacementById,
    getDisplacements,
    startDisplacement,
  };
}
