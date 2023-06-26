import React from "react";
import DisplacementList from "../api/displacement/DisplacementList";
import DispacementFormAdd from "../api/displacement/DisplacementFormAdd";

const page = () => {
  return (
    <>
      <section>
        <DispacementFormAdd />
        <DisplacementList />
      </section>
    </>
  );
};

export default page;
