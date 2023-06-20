"use client";
import React from "react";
import ClientForm from "../api/client/ClientFormAdd";
import ClientList, { Client } from "../api/client/ClientList";

const page = () => {
  const handleAddUser = async (payload: Client) => {
    try {
      await fetch("https://api-deslocamento.herokuapp.com/api/v1/Cliente/", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <ClientForm onAddUser={handleAddUser} />
        <ClientList />
      </div>
    </>
  );
};

export default page;
