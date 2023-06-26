import { use, useEffect, useState } from "react";
import { PropsClient } from "../api/client/ClientList";

export type Client = {
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export interface UpdateClient extends Partial<Client> {
  id: number;
}

export default function useClient() {
  const [allClients, setAllClients] = useState<PropsClient[]>([]);

  useEffect(() => {
    getClients().then((res) => setAllClients(res));
  }, []);

  async function getClientById(id: number) {
    try {
      const response = await fetch(
        `https://api-deslocamento.herokuapp.com/api/v1/Cliente/${id}`
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }

  async function getClients() {
    try {
      const response = await fetch(
        "https://api-deslocamento.herokuapp.com/api/v1/Cliente"
      );
      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async function saveClient(payload: Client) {
    if (payload) {
      try {
        await fetch("https://api-deslocamento.herokuapp.com/api/v1/Cliente", {
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
  async function deleteClient(id: number) {
    if (id) {
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Cliente/${id}`,
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
  async function editClient(payload: UpdateClient) {
    if (payload) {
      console.log(payload);
      try {
        await fetch(
          `https://api-deslocamento.herokuapp.com/api/v1/Cliente/${payload.id}`,
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
    saveClient,
    getClients,
    deleteClient,
    editClient,
    getClientById,
    allClients,
  };
}
