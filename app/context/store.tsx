"use client";

import { createContext, useContext } from "react";
import useClient, { Client, UpdateClient } from "../hooks/useClient";
import useConductor, {
  Conductor,
  UpdateConductor,
} from "../hooks/useConductor";
import { PropsCondutor } from "../api/conductor/ConductorList";
import useVehicles, { UpdateVehicles, Vehicles } from "../hooks/useVehicles";
import { PropsClient } from "../api/clients/ClientList";
import useDisplacement, {
  FinishDisplacement,
  StartDisplacement,
} from "../hooks/useDisplacement";
import { PropsDisplacement } from "../api/displacement/DisplacementList";

interface GlobalContextProps {
  // Client
  saveClient: (payload: Client) => Promise<void>;
  getClients: () => Promise<PropsClient[]>;
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
  getDisplacements: () => Promise<PropsDisplacement[]>;
  startDisplacement: (payload: StartDisplacement) => Promise<void>;
  deleteDisplacement: (id: number) => Promise<void>;
  finishDisplacement: (payload: FinishDisplacement) => Promise<void>;
  getDisplacementById: (id: number) => Promise<PropsDisplacement>;

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
    deleteDisplacement,
    finishDisplacement,
    getDisplacementById,
    getDisplacements,
    startDisplacement,
  } = useDisplacement();

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

        getDisplacements,
        startDisplacement,
        deleteDisplacement,
        finishDisplacement,
        getDisplacementById,

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
