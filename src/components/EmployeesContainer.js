import React, { useState } from "react";
import Employee from "./Employee";

function EmployeesContainer({ employees, setEmployees }) {
  const [selectedOption, setSelectedOption] = useState("All");

  function handleSelect(e) {
    setSelectedOption(e.target.value);
  }

  function updateEmployees(data) {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === data.id) {
        return data;
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function handleDelete(id) {

  const deleted =  employees.filter((employee) =>{
        return employee.id !== id
    })
    setEmployees(deleted)
  }



  const filteredEmployees = employees.filter((employee) => {
    if (selectedOption === "All") {
      return employee;
    }
    return employee.delete === true && selectedOption === "delete";
  });

  const displayEmployees = filteredEmployees.map((employee) => {
    return (
      <Employee
        key={employee.id}
        deleted={employee.delete}
        id={employee.id}
        username={employee.username}
        image={employee.image}
        position={employee.position}
        salary={employee.salary}
        updateEmployees={updateEmployees}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div className="employees-container">
      <select
        onChange={handleSelect}
        value={selectedOption}
        className="select-bar"
      >
        <option>Employees</option>
        
      </select>

      {displayEmployees}
    </div>
  );
}

export default EmployeesContainer;
