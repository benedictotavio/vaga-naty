import DisplacementSection from "@/app/api/displacement/DisplacementSection";
import React from "react";

const page = ({ params }: any) => {
  return (
    <section>
      <DisplacementSection id={params.id} />
    </section>
  );
};

export default page;
