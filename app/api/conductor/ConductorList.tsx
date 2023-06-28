"use client";

import CardConductor from "@/app/components/items/CardConductor";
import { useGlobalContext } from "@/app/context/store";
import { Conductor } from "@/app/hooks/useConductor";
import { Box, List, Pagination } from "@mui/material";
import { useState } from "react";

export interface PropsCondutor extends Conductor {
  id?: number;
}

const ConductorList = () => {
  const { allConductors } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemPerPage] = useState<number>(6);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentItems = allConductors.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        minHeight={500}
      >
        <List
          sx={{
            minWidth: 400,
            bgcolor: "background.paper",
          }}
        >
          {allConductors.length > 0 ? (
            currentItems.map((item) => (
              <CardConductor
                key={item.id}
                nome={item.nome}
                numeroHabilitacao={item.numeroHabilitacao}
                catergoriaHabilitacao={item.catergoriaHabilitacao}
                vencimentoHabilitacao={item.vencimentoHabilitacao}
                id={item.id}
              />
            ))
          ) : (
            <div>Não ha condutores cadastrados</div>
          )}
        </List>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          page={currentPage}
          count={Math.ceil(allConductors.length / itemsPerPage)}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default ConductorList;
