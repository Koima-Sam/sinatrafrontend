import React from "react";

import EmployeesContainer from "./EmployeesContainer";

function Assigned({ employees, setEmployees }) {
  return (
    <div className="assigned">
      <EmployeesContainer employees={employees} setEmployees={setEmployees} />
    </div>
  );
}

export default Assigned;
