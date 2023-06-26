import VehicleSection from "@/app/api/vehicles/VehiclesSection";

const page = ({ params }: any) => {
  return (
    <>
      <section>
        <VehicleSection id={params.id} />
      </section>
    </>
  );
};

export default page;
