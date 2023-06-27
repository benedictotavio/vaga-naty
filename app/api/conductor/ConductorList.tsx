"use client";

import CardConductor from "@/app/components/items/CardConductor";
import Pagination from "@/app/components/layout/Pagination";
import { useGlobalContext } from "@/app/context/store";
import { Conductor } from "@/app/hooks/useConductor";
import { Box, List } from "@mui/material";
import { useState } from "react";

export interface PropsCondutor extends Conductor {
  id?: number;
}

const ConductorList = () => {
  const { allConductors } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <List sx={{ minWidth: 400, bgcolor: "background.paper" }}>
          {allConductors.length > 0 ? (
            allConductors.map((item) => (
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
          totalItems={allConductors.length}
          itemsPerPage={8}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default ConductorList;
