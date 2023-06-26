import ConductorFormAdd from "../api/conductor/ConductorFormAdd";
import ConductorList from "../api/conductor/ConductorList";

const page = () => {
  return (
    <>
      <section>
        <ConductorFormAdd />
        <ConductorList />
      </section>
    </>
  );
};

export default page;
