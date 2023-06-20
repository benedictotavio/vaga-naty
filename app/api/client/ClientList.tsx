import React, { useEffect, useState } from "react";
import ViewCard from "@/app/components/items/Card";
import { useClientContext } from "@/app/context/ClientStore";
import { Box } from "@mui/material";

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
  const { getClients } = useClientContext();
  useEffect(() => {
    getClients().then((res) => setClient(res));
  }, [getClients]);

  return (
    <>
      <div>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {client.map((item: Client) => (
            <ViewCard
              key={item.id}
              bairro={item.bairro}
              cidade={item.cidade}
              nome={item.nome}
              logradouro={item.logradouro}
              numero={item.numero}
              numeroDocumento={item.numeroDocumento}
              tipoDocumento={item.tipoDocumento}
              uf={item.uf}
            />
          ))}
        </Box>
      </div>
    </>
  );
};

export default ClientList;
