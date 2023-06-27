import ViewCard from "@/app/components/items/CardClient";
import { useGlobalContext } from "@/app/context/store";
import { Box } from "@mui/material";
import { Client } from "@/app/hooks/useClient";
import Pagination from "@/app/components/layout/Pagination";
import { useState } from "react";

export interface PropsClient extends Client {
  id: number;
}

const ClientList = () => {
  const { allClients } = useGlobalContext();

  const { allConductors } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
          {allClients.length > 0 ? (
            allClients.map((item) => (
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
            ))
          ) : (
            <div>Não ha clientes cadastrados</div>
          )}
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <Pagination
            totalItems={allClients.length}
            itemsPerPage={4}
            currentPage={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default ClientList;
