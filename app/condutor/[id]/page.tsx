import UserSection from "@/app/api/conductor/ConductorSection";
import React from "react";

const page = ({ params }: any) => {
  return (
    <>
      <section>
        <UserSection id={params.id} />
      </section>
    </>
  );
};

export default page;
