import VehicleSection from "@/app/api/vehicles/VehiclesSection";

const page = ({ params }: any) => {
  return (
    <>
      <VehicleSection id={params.id} />
    </>
  );
};

export default page;
