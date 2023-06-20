"use client";
import React from "react";
import ClientForm from "../api/client/ClientFormAdd";
import ClientList from "../api/client/ClientList";

const page = () => {
  return (
    <>
      <div>
        <ClientForm />
        <ClientList />
      </div>
    </>
  );
};

export default page;
