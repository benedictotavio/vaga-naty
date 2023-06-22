"use client";
import React, { useState } from "react";
import ClientForm from "../api/clients/ClientFormAdd";
import ClientList from "../api/clients/ClientList";

const page = () => {
  return (
    <>
      <div style={{ minHeight: "90vh", margin: "15px 10px" }}>
        <ClientForm />
        <ClientList />
      </div>
    </>
  );
};

export default page;
