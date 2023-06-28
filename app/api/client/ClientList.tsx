import ViewCard from "@/app/components/items/CardClient";
import { useGlobalContext } from "@/app/context/store";
import { Box, Pagination } from "@mui/material";
import { Client } from "@/app/hooks/useClient";
import { useState } from "react";

export interface PropsClient extends Client {
  id: number;
}

const ClientList = () => {
  const { allClients } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemPerPage] = useState<number>(3);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentItems = allClients.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          minHeight={500}
        >
          {allClients.length > 0 ? (
            currentItems.map((item) => (
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
            page={currentPage}
            count={Math.ceil(allClients.length / itemsPerPage)}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default ClientList;
