"use client";

import CardVehicles from "@/app/components/items/CardVehicles";
import { useGlobalContext } from "@/app/context/store";
import { Vehicles } from "@/app/hooks/useVehicles";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";

export interface PropsVehicles extends Vehicles {
  id?: number;
}

const VehiclesList = () => {
  const { allVehicles } = useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemPerPage] = useState<number>(8);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentItems = allVehicles.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {allVehicles.length > 0 ? (
          currentItems.map((item) => (
            <>
              <CardVehicles
                key={item.id}
                id={item.id}
                placa={item.placa}
                marcaModelo={item.marcaModelo}
                anoFabricacao={item.anoFabricacao}
                kmAtual={item.kmAtual}
              />
            </>
          ))
        ) : (
          <div>Não ha veiculos cadastrados.</div>
        )}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          page={currentPage}
          count={Math.ceil(allVehicles.length / itemsPerPage)}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};
export default VehiclesList;
