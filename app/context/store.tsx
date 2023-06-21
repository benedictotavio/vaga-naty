"use client";

import { createContext, useContext } from "react";
import useClient, { Client, UpdateClient } from "../hooks/useClient";
import useConductor, {
  Conductor,
  UpdateConductor,
} from "../hooks/useConductor";

interface GlobalContextProps {
  // Client
  saveClient: (payload: Client) => Promise<void>;
  getClients: () => Promise<Client[]>;
  getClientById: (id: number) => Promise<any>
  deleteClient: (id: number) => Promise<void>;
  editClient: (payload: UpdateClient) => Promise<void>;

  // Conductor
  getConductors: () => Promise<Conductor[]>;
  saveConductor: (payload: Conductor) => Promise<void>;
  deleteConductor: (id: number) => Promise<void>;
  editConductor: (payload: UpdateConductor) => Promise<void>;
}

const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({ children }: any) => {
  const { saveClient, getClients, deleteClient, editClient,getClientById } = useClient();

  const { getConductors, saveConductor, deleteConductor, editConductor } =
    useConductor();

  return (
    <GlobalContext.Provider
      value={{
        saveClient,
        getClients,
        getClientById,
        deleteClient,
        editClient,
        getConductors,
        saveConductor,
        deleteConductor,
        editConductor,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
