import ViewCard from "@/app/components/items/CardClient";
import { useGlobalContext } from "@/app/context/store";
import { Box } from "@mui/material";
import { Client } from "@/app/hooks/useClient";

export interface PropsClient extends Client {
  id: number;
}

const ClientList = () => {
  const { allClients } =
    useGlobalContext();
  

  return (
    <>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {allClients.length > 0 ? allClients.map((item) => (
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
        )) : (
          <div>
            Não ha clientes cadastrados
          </div>
        )}
      </Box>
    </>
  );
};

export default ClientList;
