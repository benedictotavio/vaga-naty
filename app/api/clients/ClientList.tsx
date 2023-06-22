import React, { useEffect, useState } from "react";
import ViewCard from "@/app/components/items/CardClient";
import { useGlobalContext } from "@/app/context/store";
import { Box } from "@mui/material";
import { Client } from "@/app/hooks/useClient";

export interface PropsClient extends Client {
  id: number;
};

const ClientList = () => {
  const [client, setClient] = useState<PropsClient[]>([]);
  const { getClients, saveClient, deleteClient } = useGlobalContext();
  useEffect(() => {
    getClients().then((res) => setClient(res));
  }, [getClients, saveClient, deleteClient]);

  return (
    <>
      <div>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {client.map((item) => (
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
              id={item.id}
            />
          ))}
        </Box>
      </div>
    </>
  );
};

export default ClientList;
