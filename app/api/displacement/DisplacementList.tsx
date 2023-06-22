"use client";

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
      <ul>
        {displacement.map((item) => (
          <>
            <li>{item.idCondutor}</li>
            <li>{item.idCliente}</li>
            <li>
              {new Date(item.inicioDeslocamento).toLocaleDateString("pt-br", {
                dateStyle: "medium",
              })}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default DisplacementList;
