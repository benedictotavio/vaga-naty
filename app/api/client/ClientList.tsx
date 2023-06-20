import React, { useEffect, useState } from "react";
import ViewCard from "@/app/components/items/Card";

export type Client = {
  id?: number;
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
};

const ClientList = () => {
  const [client, setClient] = useState<Client[]>([]);

  useEffect(() => {
    getClient();
  }, []);

  const getClient = async () => {
    try {
      const response = await fetch(
        "https://api-deslocamento.herokuapp.com/api/v1/Cliente"
      );
      const results = await response.json();
      setClient(results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h2>ClientList</h2>
        <ul>
          {client.map((item: Client, i: number) => (
            <ViewCard key={i} title={item.nome} document={item.numeroDocumento} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ClientList;
