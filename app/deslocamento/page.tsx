import React from "react";
import DisplacementList from "../api/displacement/DisplacementList";
import DispacementFormAdd from "../api/displacement/DisplacementFormAdd";

const page = () => {
  return (
    <>
      <DispacementFormAdd />
      <DisplacementList />
    </>
  );
};

export default page;
