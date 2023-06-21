"use client";

import { useGlobalContext } from "@/app/context/store";
import { Conductor } from "@/app/hooks/useConductor";
import { useEffect, useState } from "react";

interface PropsCondutor extends Conductor {
  id?: number;
}

const ConductorList = () => {
  const [conductor, setConductor] = useState<PropsCondutor[]>([]);
  const { getConductors, saveConductor } = useGlobalContext();

  useEffect(() => {
    getConductors().then((res) => setConductor(res));
  }, [getConductors, saveConductor]);

  return (
    <>
      <ul>
        {conductor.map((item: Conductor, i) => (
          <div key={i}>
            <li>{item.nome}</li>
            <li>
              {item.categoriaHabilitacao}: {item.numeroHabilitacao}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default ConductorList;
