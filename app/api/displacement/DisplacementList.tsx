"use client";

import CardDisplacement from "@/app/components/items/CardDisplacement";
import { useGlobalContext } from "@/app/context/store";
import { StartDisplacement } from "@/app/hooks/useDisplacement";
import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

export interface PropsDisplacement extends StartDisplacement {
  id?: number;
}

const DisplacementList = () => {
  const [displacement, setDisplacement] = useState<PropsDisplacement[]>([]);

  const { getDisplacements } = useGlobalContext();

  useEffect(() => {
    getDisplacements().then((res) => setDisplacement(res));
  }, [getDisplacements]);

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemPerPage] = useState<number>(3);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const currentItems = displacement.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Box minHeight={500}>
        {displacement.length > 0 ? (
          currentItems.map((item) => (
            <>
              <CardDisplacement
                key={item.id}
                id={item.id}
                inicioDeslocamento={item.inicioDeslocamento}
                kmInicial={item.kmInicial}
                checkList={item.checkList}
                motivo={item.motivo}
                observacao={item.observacao}
                idCondutor={item.idCondutor}
                idVeiculo={item.idVeiculo}
                idCliente={item.idCliente}
              />
            </>
          ))
        ) : (
          <div>Não existem Deslocamentos!</div>
        )}
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          page={currentPage}
          count={Math.ceil(displacement.length / itemsPerPage)}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default DisplacementList;
