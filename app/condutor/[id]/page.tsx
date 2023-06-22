import UserSection from "@/app/api/conductor/ConductorSection";
import React from "react";

const page = ({ params }: any) => {
  return (
    <>
      <UserSection id={params.id} />
    </>
  );
};

export default page;
