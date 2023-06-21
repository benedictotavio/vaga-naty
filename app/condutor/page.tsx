import ConductorFormAdd from "../api/conductor/ConductorFormAdd";
import ConductorList from "../api/conductor/ConductorList";

const page = () => {
  return (
    <>
      <ConductorFormAdd />
      <ConductorList />
    </>
  );
};

export default page;
