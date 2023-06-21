"use client";
import React, { useState } from "react";
import ClientForm from "../api/client/ClientFormAdd";
import ClientList from "../api/client/ClientList";

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
