import React from "react";
import VehiclesList from "../api/vehicles/VehiclesList";
import VehiclesFormAdd from "../api/vehicles/VehicleFormAdd";

const page = () => {
  return (
    <>
      <section>
        <VehiclesFormAdd />
        <VehiclesList />
      </section>
    </>
  );
};

export default page;
