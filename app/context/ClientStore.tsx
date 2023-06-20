"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import useClient, { Client } from "../hooks/useClient";

interface ClientContextProps {
  saveClient: (payload: Client) => Promise<void>;
  getClients: () => Promise<Client[]>;
}

const ClientContext = createContext({} as ClientContextProps);

export const ClientContextProvider = ({ children}: any) => {
  const { saveClient, getClients } = useClient();

  return (
    <ClientContext.Provider value={{ saveClient, getClients }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
