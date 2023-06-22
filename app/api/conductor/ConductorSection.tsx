"use client";

import { useGlobalContext } from "@/app/context/store";
import React, { useEffect, useState } from "react";
import { PropsCondutor } from "./ConductorList";

type PropClients = {
  id: number;
};

const UserSection = ({ id }: PropClients) => {
  const [user, setUser] = useState<PropsCondutor>({
    catergoriaHabilitacao: "",
    nome: "",
    numeroHabilitacao: "",
    vencimentoHabilitacao: new Date(),
    id: 0,
  });

  const { getConductorById } = useGlobalContext();

  useEffect(() => {
    getConductorById(id).then((res) => setUser(res));
  }, [getConductorById, id]);

  return (
    <>
      <div>
        <h1>{user.nome}</h1>
      </div>
      <div>
        <h4>{user.catergoriaHabilitacao}</h4>
        <h4>{user.numeroHabilitacao}</h4>
      </div>
    </>
  );
};

export default UserSection;
