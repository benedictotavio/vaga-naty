"use client";

import CardConductor from "@/app/components/items/CardConductor";
import { useGlobalContext } from "@/app/context/store";
import { Conductor } from "@/app/hooks/useConductor";
import { useEffect, useState } from "react";

export interface PropsCondutor extends Conductor {
  id?: number;
}

const ConductorList = () => {
  const [conductor, setConductor] = useState<PropsCondutor[]>([]);
  const { getConductors, saveConductor, deleteConductor, editConductor } =
    useGlobalContext();

  useEffect(() => {
    getConductors().then((res) => setConductor(res));
  }, [getConductors, saveConductor, deleteConductor, editConductor]);

  return (
    <>
      {conductor.map((item: PropsCondutor) => (
        <CardConductor
          key={item.id}
          nome={item.nome}
          numeroHabilitacao={item.numeroHabilitacao}
          catergoriaHabilitacao={item.catergoriaHabilitacao}
          vencimentoHabilitacao={item.vencimentoHabilitacao}
          id={item.id}
        />
      ))}
    </>
  );
};

export default ConductorList;
