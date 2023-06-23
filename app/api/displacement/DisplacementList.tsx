"use client";

import CardDisplacement from "@/app/components/items/CardDisplacement";
import { useGlobalContext } from "@/app/context/store";
import { StartDisplacement } from "@/app/hooks/useDisplacement";
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
  return (
    <>
      {displacement.map((item) => (
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
      ))}
    </>
  );
};

export default DisplacementList;
