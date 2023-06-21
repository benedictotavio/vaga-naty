"use client";

import { createContext, useContext } from "react";
import useClient, { Client, UpdateClient } from "../hooks/useClient";

interface ClientContextProps {
  saveClient: (payload: Client) => Promise<void>;
  getClients: () => Promise<Client[]>;
  deleteClient: (id: number) => Promise<void>;
  editClient: (payload: UpdateClient) => Promise<void>;
  update: boolean;
}

const ClientContext = createContext({} as ClientContextProps);

export const ClientContextProvider = ({ children }: any) => {
  const { saveClient, getClients, update, deleteClient, editClient } =
    useClient();

  return (
    <ClientContext.Provider
      value={{ saveClient, getClients, deleteClient, editClient, update }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
