import UserSection from "@/app/api/client/ClientSection";
import React from "react";

const page = ({ params }: any) => {
  return (
    <>
      <UserSection id={params.id} />
    </>
  );
};

export default page;
