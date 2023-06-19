"use client";

import { useState } from "react";
import ViewCard from "../components/items/Card";

export type UserData = {
  id?: number;
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export default async function Page() {
  const [data, setData] = useState<UserData[]>([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://api-deslocamento.herokuapp.com/api/v1/Cliente"
    );
    const newData = await res.json();
    setData(newData);
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <>
      <button onClick={handleClick}>Fetch Data</button>
      <ul>
        {data.map((item: UserData) => (
          <>
            <ViewCard
              key={item.id}
              nome={item.nome}
              numeroDocumento={item.numeroDocumento}
              tipoDocumento={item.tipoDocumento}
              logradouro={item.logradouro}
              numero={item.numero}
              bairro={item.bairro}
              cidade={item.cidade}
              uf={item.uf}
            />
          </>
        ))}
      </ul>
    </>
  );
}
