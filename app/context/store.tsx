"use client";

import { createContext, useContext } from "react";
import useClient, { Client, UpdateClient } from "../hooks/useClient";
import useConductor, {
  Conductor,
  UpdateConductor,
} from "../hooks/useConductor";
import { PropsCondutor } from "../api/conductor/ConductorList";
import useVehicles, { UpdateVehicles, Vehicles } from "../hooks/useVehicles";

interface GlobalContextProps {
  // Client
  saveClient: (payload: Client) => Promise<void>;
  getClients: () => Promise<Client[]>;
  getClientById: (id: number) => Promise<any>;
  deleteClient: (id: number) => Promise<void>;
  editClient: (payload: UpdateClient) => Promise<void>;

  // Conductor
  getConductors: () => Promise<Conductor[]>;
  saveConductor: (payload: Conductor) => Promise<void>;
  deleteConductor: (id: number) => Promise<void>;
  editConductor: (payload: UpdateConductor) => Promise<void>;
  getConductorById: (id: number) => Promise<PropsCondutor>;

  // Displacement

  // Vehicles
  getVehicleById: (id: number) => Promise<any>;
  deleteVehicle: (id: number) => Promise<void>;
  editVehicle: (payload: UpdateVehicles) => Promise<void>;
  getVehicles: () => Promise<any>;
  saveVehicle: (payload: Vehicles) => Promise<void>;
}

const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({ children }: any) => {
  const { saveClient, getClients, deleteClient, editClient, getClientById } =
    useClient();

  const {
    getConductors,
    saveConductor,
    deleteConductor,
    editConductor,
    getConductorById,
  } = useConductor();

  const {
    getVehicleById,
    deleteVehicle,
    editVehicle,
    getVehicles,
    saveVehicle,
  } = useVehicles();

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
        getConductorById,

        getVehicleById,
        deleteVehicle,
        editVehicle,
        getVehicles,
        saveVehicle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
