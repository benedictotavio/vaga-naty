"use client";

import { createContext, useContext } from "react";
import useClient, { Client, UpdateClient } from "../hooks/useClient";
import useConductor, {
  Conductor,
  UpdateConductor,
} from "../hooks/useConductor";
import { PropsCondutor } from "../api/conductor/ConductorList";
import useVehicles, { UpdateVehicles, Vehicles } from "../hooks/useVehicles";
import useDisplacement, {
  Displacement,
  FinishDisplacement,
  StartDisplacement,
} from "../hooks/useDisplacement";
import { PropsVehicles } from "../api/vehicles/VehiclesList";
import { PropsClient } from "../api/client/ClientList";

interface GlobalContextProps {
  // Client
  saveClient: (payload: Client) => Promise<void>;
  getClientById: (id: number) => Promise<PropsClient>;
  deleteClient: (id: number) => Promise<void>;
  editClient: (payload: UpdateClient) => Promise<void>;
  allClients: PropsClient[];

  // Conductor
  saveConductor: (payload: Conductor) => Promise<void>;
  deleteConductor: (id: number) => Promise<void>;
  editConductor: (payload: UpdateConductor) => Promise<void>;
  getConductorById: (id: number) => Promise<PropsCondutor>;
  allConductors: Conductor[];

  // Displacement
  getDisplacements: () => Promise<Displacement[]>;
  startDisplacement: (payload: StartDisplacement) => Promise<void>;
  deleteDisplacement: (id: number) => Promise<void>;
  finishDisplacement: (payload: FinishDisplacement) => Promise<void>;
  getDisplacementById: (id: number) => Promise<Displacement>;

  // Vehicles
  getVehicleById: (id: number) => Promise<PropsVehicles>;
  deleteVehicle: (id: number) => Promise<void>;
  editVehicle: (payload: UpdateVehicles) => Promise<void>;
  saveVehicle: (payload: Vehicles) => Promise<void>;
  allVehicles: PropsVehicles[];
}

const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({ children }: any) => {
  const { saveClient, deleteClient, editClient, getClientById, allClients } =
    useClient();

  const {
    saveConductor,
    deleteConductor,
    editConductor,
    getConductorById,
    allConductors,
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
    saveVehicle,
    allVehicles,
  } = useVehicles();

  return (
    <GlobalContext.Provider
      value={{
        saveClient,
        getClientById,
        deleteClient,
        editClient,
        allClients,

        allConductors,
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
        saveVehicle,
        allVehicles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
