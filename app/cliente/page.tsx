"use client";
import React, { useState } from "react";
import ClientForm from "../api/client/ClientFormAdd";
import ClientList from "../api/client/ClientList";

const page = () => {
  return (
    <>
      <section>
        <ClientForm />
        <ClientList />
      </section>
    </>
  );
};

export default page;
