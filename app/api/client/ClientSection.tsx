"use client";

import { useGlobalContext } from "@/app/context/store";
import React, { useEffect, useState } from "react";
import { Client } from "./ClientList";

type PropClients = {
  id: number;
};

const UserSection = ({ id }: PropClients) => {
  const [user, setUser] = useState<Client>({
    numeroDocumento: "",
    tipoDocumento: "",
    nome: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const { getClientById } = useGlobalContext();

  useEffect(() => {
    getClientById(id).then((res) => setUser(res));
  }, [getClientById, id]);

  return (
    <>
      <div>
        <h1>{user.nome}</h1>
      </div>
      <div>
        <h4>{user.cidade}</h4>
        <h4>{user.bairro}</h4>
      </div>
    </>
  );
};

export default UserSection;
