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

  const [itemsPerPage, setItemPerPage] = useState<number>(
    innerWidth > 1000 ? 8 : 4
  );

  console.log(innerWidth);

  console.log(innerWidth > 1000 ? 8 : 4);

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
        flexWrap="wrap"
        minHeight={500}
      >
        {allVehicles.length > 0 ? (
          currentItems.map((item, i) => (
            <>
              <CardVehicles
                key={i}
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
